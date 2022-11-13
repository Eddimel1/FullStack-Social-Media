import {
  validImageMimeTypes,
  validAudioMimeTypes,
  validVideoMimeTypes,
} from '../rest-files/fileValidationData/valid_mime_types'
type _type = 'image' | 'video' | 'audio'
type _args = {
  type: _type
  mimeType: string
}
export const mimeTypeMapper = (mimeType: string) => {
  console.log(mimeType)
  if (validImageMimeTypes.includes(mimeType)) return { type: 'image', mimeType } as _args
  else if (validAudioMimeTypes.includes(mimeType))
    return { type: 'video', mimeType } as _args
  else if (validVideoMimeTypes.includes(mimeType))
    return { type: 'audio', mimeType } as _args
}

export const validateMimeType = (args: _args) => {
  console.log(args.type)
  switch (args.type) {
    case 'image':
      return validImageMimeTypes.includes(args.mimeType)

    case 'video':
      return validAudioMimeTypes.includes(args.mimeType)

    case 'audio':
      return validVideoMimeTypes.includes(args.mimeType)

    default:
      throw new Error(`not appropriate mimeType : ${args.mimeType}`)
  }
}
