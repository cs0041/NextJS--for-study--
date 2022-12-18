
export interface Youtube {
    id: string;
    title: string;
    subtitle: string;
    avatar_image: string;
    youtube_image: string;
  }
  
  export interface Data {
    youtubes: Youtube[];
    error: boolean;
    error_msg: string;
  }