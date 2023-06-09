import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import { useGetPostsQuery } from "@/graphql/generated/graphql";
import { GraphQLClient } from "graphql-request";
import { dehydrate, QueryClient, useQueryClient } from "@tanstack/react-query";
import { GetPostsQuery } from "../graphql/generated/graphql";
import { newGraphqlClient } from "@/graphql/useGraphQl";

const inter = Inter({ subsets: ["latin"] });

const client = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL || "", { headers: {} });

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);

    return `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`;
  },
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 10,
  friction: () => 0.5,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 80);
};

export default function Home() {
  const queryClient = useQueryClient();

  const {
    data: postsData,
    isLoading,
    error,
  } = useGetPostsQuery(client, { page: 0, perPage: 10 });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <p>POST 0: {postsData?.allPosts?.[0]?.title}</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <ParticleImage
            src={"/next.png"}
            width={1000}
            scale={0.25}
            entropy={25}
            maxParticles={2000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor=""
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(useGetPostsQuery.getKey({ page: 0, perPage: 10 }), useGetPostsQuery.fetcher(newGraphqlClient(), { page: 0, perPage: 10 }));

  const data = await useGetPostsQuery.fetcher(newGraphqlClient(), { page: 0, perPage: 10 })();

  console.log(dehydrate(queryClient).queries[0].state);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
