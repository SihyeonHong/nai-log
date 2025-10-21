export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

export interface PostMeta {
  // 필수 필드
  title: string;
  type: "article" | "nugget" | "story";
  tags: string[];
  uploadedAt: string;

  // 선택적 필드
  lastEditedAt?: string;
  isPublished?: boolean;
  description?: string;
  thumbnail?: string;
  series?: string;
  seriesOrder?: number;
}

export interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content?: string;
  encoding?: string;
}

export interface GitHubApiResponse {
  content: string;
  encoding: "base64";
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
}
