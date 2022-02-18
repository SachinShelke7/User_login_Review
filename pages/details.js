import Head from "next/head";
import dynamic from 'next/dynamic'
import Review from "../container/Review";

const UserDATA = dynamic(
  () => import('../components/UserData'),
  { ssr: false }
)

export default function Details() {

  return (
    <div>
      <Head>
        <title>User Details</title>
      </Head>
      <UserDATA />
      <Review />
    </div>
  );
}
