import Image from 'next/image';

export function ProfilePicture() {
  return (
    <Image
      src="/images/profile.jpg"
      width={144}
      height={144}
      alt="Profile picture"
    />
  );
}
