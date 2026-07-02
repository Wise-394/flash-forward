import { db } from "@/configs/Sqlite";
import { VideoMetadataType } from "@/types/types";

export const insertVideo = async (
  video: Omit<VideoMetadataType, "id" | "createdAt">,
) => {
  try {
    await db.runAsync(
      `INSERT INTO videos(title, description, file_path, unlock_date, created_at) VALUES(?, ?, ?,?, ?)`,
      [
        video.title,
        video.description,
        video.filepath,
        video.unlockDate,
        new Date().toISOString(),
      ],
    );
  } catch (err) {
    console.error(err);
  }
};

export const selectAllVideo = async (): Promise<VideoMetadataType[]> => {
  try {
    const result = await db.getAllAsync<VideoMetadataType>(
      "SELECT * FROM videos",
    );
    return result;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const selectVideo = async (
  id: number,
): Promise<VideoMetadataType | null> => {
  try {
    const result = await db.getFirstAsync<VideoMetadataType>(
      "SELECT * FROM VIDEOS WHERE id = ?",
      [id],
    );
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteVideo = async (id: number) => {
  try {
    const result = await db.runAsync("DELETE FROM videos WHERE id = ?", [id]);
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};
//TODO MAKE ERROR MODAL
