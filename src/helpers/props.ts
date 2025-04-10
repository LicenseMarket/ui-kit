export const getAvatarUrl = (avatarUrl: any) =>
  `https://lm-public-storage.s3-website.ir-thr-at1.arvanstorage.ir/publicImageManager/${avatarUrl}`;

export function trunc(s: string, n: number) {
  if (s) {
    return s.length > n ? s.substr(0, n - 1) + "..." : s;
  } else {
    return "";
  }
}
