export interface PostMeta {
  // 필수 필드
  title: string;
  tags: string[];
  uploadedAt: string;

  // 선택적 필드
  lastEditedAt?: string;
  isPublished?: boolean;
  description?: string;
  thumbnail?: string;
  isFeatured?: boolean;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

export interface PostListItem {
  slug: string;
  meta: PostMeta;
  fileName: string;
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
