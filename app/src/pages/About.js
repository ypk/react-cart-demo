import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Loading, Icons } from "../components/common";
import Layout from "../components/Layout";
import { Breadcrumb } from "../components/common";
import APIService from "../services/api-service";
import { Logger } from "../helpers";
import useToast from "../hooks/useToast";

const About = () => {
  const toast = useToast();
  const [catFacts, setCatFacts] = useState([]);
  const [hasFacts, setHasFacts] = useState(false);
  const [failedLoading, setFailedLoading] = useState(false);
  const APIUrl = "https://catfact.ninja/facts?limit=5";
  const { BulletIcon } = Icons;
  const currPage = "About";

  APIService.init(APIUrl);

  const fallbackCatFacts = [
    {
      id: 0,
      fact: "A house cat is genetically 95.6% tiger.",
    },
    {
      id: 1,
      fact:
        "Cats can run around 48 kph (30 mph), but only over short distances. A house cat could beat superstar runner Usain Bolt in the 200 meter dash.",
    },
    {
      id: 2,
      fact:
        "Cats have an extra organ that allows them to taste scents in the air",
    },
    {
      id: 3,
      fact: "Each cat’s nose is unique, much like human fingerprints.",
    },
    {
      id: 4,
      fact: "Cats can jump 5 times their height",
    },
    {
      id: 5,
      fact: "Cats can dream",
    },
    {
      id: 6,
      fact:
        "An ailurophile is a person who loves cats. The word `ailuro` is the ancient Greek word for cat.",
    },
  ];

  useEffect(() => {
    const content = APIService.get((e) => {
      setFailedLoading(true);
    });
    content.then((d) => {
      if (d && d.data && d.data.length > 0) {
        const serializedData = d.data.map((factObj) => {
          const uuid = uuidv4();
          return { id: uuid, fact: factObj.fact };
        });
        setCatFacts(serializedData);
        setHasFacts(true);
        const message = "Fetched Cat Facts successfully";
        toast.addToast(message);
        Logger.info(message);
      }
    });
    content.error((e) => {
      const { message } = e;
      toast.addToast(message);
      Logger.error(message);
    });
  }, []);

  return (
    <Layout>
      <section className="bg-mmt-500 md:pt-8 md:pb-2">
        <div className="container py-8 px-6 mx-auto">
          <Breadcrumb currPage={currPage} />
          <main className="my-8">
            <div className="mt-8 mb-8 text-xl">
              <p>
                The page informs the user about the store. It may include
                information such as when the store was started, How has the
                store grown until now, and how many people are working behind
                the scenes to make it happen.
              </p>
              <p className="my-4">
                This is another long line of string to go with the one written
                above. Does it match the length of the afforementioned string?
                maybe or maybe not. But I certainly hope that it will because I
                need this string to be as big as the one above or it will break
                the appearance of the paragraph. Is this enough? I don't know.
              </p>
              <p className="my-4">
                Oh yeah! <kbd>mála</kbd> in Gaelic means Basket/Cart/Bag.
              </p>
            </div>
          </main>
        </div>
      </section>
      <section className="bg-mmt-500">
        <div className="container md:py-8 px-6 mx-auto">
          <h2 className="uppercase tracking-wide font-bold font-cinzel text-gray-800 text-xl mb-8">
            Another Section
          </h2>
          <div className="mt-8 mb-8 text-xl">
            <p>
              Ah! you're still reading? that's great! Thank you for reading the
              whole text. I am spending considerable amount of time to write
              this. I'll have to let you know that I am typing this on the whim.
              I haven't thought of it earlier, everything is being made up as I
              type it. So there might be some mistake sor typos. If you find
              any, please forgive me.
            </p>
            <p className="my-4">
              Now, if you are connected to the internet you will see a picture
              of cat below. Why you may ask. Why not I'd say?
            </p>
          </div>
        </div>
        <div className="container pb-8 px-6 mx-auto">
          <div className="flex md:flex-row flex-wrap">
            <div className="w-full md:w-3/4 pr-3">
              <h3 className="pb-3 font-bold font-cinzel text-2xl">A cat</h3>
              <p className="py-3">Meet our C.E.O.</p>
              <p>
                blah blah blah blah, I've ran out of things to write. I've got
                that.. what you'd say... Ah! a writer's block.
              </p>
              <p className="mb-6">
                Anyways, here's a list of cat facts I've pulled from the
                internet using the magic of javascript and XMLHTTP for your
                enjoyment.
              </p>
              <h4 className="my-8 underline font-bold">Cat Facts</h4>
              {!hasFacts && !failedLoading ? (
                <Loading />
              ) : hasFacts && !failedLoading ? (
                <ul className="py-4">
                  {hasFacts &&
                    Object.keys(catFacts).map((factObj) => {
                      const { id, fact } = catFacts[factObj];
                      return (
                        <li className="flex py-2" key={id}>
                          <BulletIcon className="w-4 h-4 group-focus:text-blue-400 group-hover:text-blue-400 mr-2 self-center" />
                          <p className="w-11/12">{fact}</p>
                        </li>
                      );
                    })}
                </ul>
              ) : failedLoading ? (
                <>
                  <p className="text-red-400 py-4">
                    Darn! Looks like it failed getting the cat facts. No
                    worries, here are some obscure facts of cats that you might
                    not know.
                  </p>
                  <ul className="py-4">
                    {fallbackCatFacts.map((factObj) => {
                      const { id, fact } = factObj;
                      return (
                        <li className="flex py-2" key={id}>
                          <BulletIcon className="w-4 h-4 group-focus:text-blue-400 group-hover:text-blue-400 mr-2 self-center" />
                          <p className="w-11/12">{fact}</p>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : null}
            </div>
            <div className="w-full md:w-1/4 pl-3">
              <img
                className="shadow-lg"
                alt="A sneaky cat"
                src="https://images.unsplash.com/photo-1549545931-59bf067af9ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
