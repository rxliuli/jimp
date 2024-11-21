import type { fileTypeFromBuffer as fileTypeFromBufferCore } from 'file-type/core'

export const fileTypeFromBuffer: typeof fileTypeFromBufferCore = async (
  buffer,
) => {
  const { fileTypeFromBuffer } = await import('file-type/core')
  return await fileTypeFromBuffer(buffer)
}
