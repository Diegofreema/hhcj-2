import Link from 'next/link';
import Image from 'next/image';

type Props = {
  white?: boolean;
};
export function Logo({ white = false }: Props) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <Image
        src={white ? '/logo.jpg' : '/logo-blackpng.png'}
        alt={'logo'}
        className={'w-[200px] h-[50px] rounded-full object-contain'}
        width={400}
        height={400}
      />
    </Link>
  );
}
