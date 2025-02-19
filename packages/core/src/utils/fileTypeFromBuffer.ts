export const fileTypeFromBuffer = async (
  buffer: Uint8Array | ArrayBuffer
) => {
  const { fileTypeFromBuffer } = await import("file-type/core");
  return await fileTypeFromBuffer(buffer);
};