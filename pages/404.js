import Image from 'next/image';
import Link from 'next/link';

const Error = () => {
  return (
    <div>
      <Image src="/error.webp" width={1920} height={50}></Image>
      <Link href="/">
        <button className="btn btn-accent">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
