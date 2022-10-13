import {
  validImageMimeTypes,
  validAudioMimeTypes,
  validVideoMimeTypes,
} from '../rest-files/fileValidationData/valid_mime_types'

export const mimeTypeMapper = (mimeType: string) => {
  if (validImageMimeTypes.includes(mimeType)) return 'image'
  else if (validAudioMimeTypes.includes(mimeType)) return 'audio'
  else if (validVideoMimeTypes.includes(mimeType)) return 'video'
}

type _args = 'image' | 'video' | 'audio'
export const validateMimeType = (type: _args) => {
  switch (type) {
    case 'image':
      return validImageMimeTypes.includes(type)

    case 'video':
      return validAudioMimeTypes.includes(type)

    case 'audio':
      return validVideoMimeTypes.includes(type)

    default:
      throw new Error(`not appropriate mimeType : ${type}`)
  }
}
