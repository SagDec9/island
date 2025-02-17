export interface Post {
  path: string
  title: string
  place?: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  radio?: boolean
  video?: boolean
  inperson?: boolean
  redirect?: string
}

export interface TalkPresentation {
  lang?: string
  date: string
  location?: string
  conference: string
  conferenceUrl: string
  recording?: string
  transcript?: string
  pdf?: string
  spa?: string
}

export interface UpcomingTalk {
  title: string
  date: string
  platform: string
  url: string
}
