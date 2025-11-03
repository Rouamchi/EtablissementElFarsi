import React from 'react'
import BackToTop from "../Components/BackToTop";
import Primairee from "../Images/Primaire.jpg"

const Primaire = () => {
  window.scrollTo(0, 0);
  return (
    <> <div className='bg-gray-100'>
      <div className="w-full h-full bg-gray-100 dark:bg-gray-800">
        <div className="w-full mx-auto py-10  dark:bg-gray-800">
          <h1 className="text-blue-700 w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-8 pt-14 dark:text-white">
            PRIMAIRE
          </h1>
          {/* Blog Cover */}
          <img
            src={Primairee}
            alt="Blog Cover"
            className="xl:w-[80%] xs:w-[96%] mx-auto lg:h-[560px] md:h-[480px] rounded-lg"
          />
          {/* Blog Info */}
          {/* <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
            <div className="flex gap-2 items-center">
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c"
                alt="Bloger Profile"
                className="md:w-[2.2rem] md:h-[2.2rem] xs:w-[2rem] xs:h-[2rem] rounded-full"
              />
              <h2 className="text-sm font-semibold dark:text-white">Samuel Abera</h2>
            </div>
            <div className="dark:text-gray-500">|</div>
            <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              MAY 20, 2024
            </h3>
            <div className="dark:text-gray-500">|</div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              5 MIN READ
            </h4>
          </div> */}
          <div className="py-6  dark:bg-gray-800">
            <div className="md:w-[80%] xs:w-[90%] mx-auto pt-4">
              {/* <p className="mx-auto text-md dark:text-gray-300">
                In the world of CSS frameworks, there are plenty of contenders vying
                for your attention. But for me, Tailwind CSS stands out from the pack.
                Here's why Tailwind CSS is my go-to for building modern websites:
              </p> */}
              <h1 className="text-blue-700 font-semibold text-lg mt-4 dark:text-white">
                1. Nos Objectifs :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Offrir une éducation de qualité aux élèves du primaire, en favorisant leur développement
                cognitif, social, émotionnel et physique. <br />
                - Créer un environnement d'apprentissage stimulant et sécuritaire, qui encourage la
                curiosité, la créativité et l'autonomie chez les élèves.<br />
                - Développer les compétences nécessaires pour réussir dans les études secondaires et audelà, telles que la lecture, l'écriture, les mathématiques, les sciences et les langues.<br />
                - Favoriser les valeurs de respect, de tolérance, de solidarité et de citoyenneté responsable
                chez les élèves.<br />
                - Établir des relations positives avec les parents et la communauté, pour travailler ensemble
                à l'épanouissement des élèves.

              </p>
              <h1 className="text-blue-700 font-semibold text-lg mt-4 dark:text-white">
                2. Notre Vision lointaine :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Devenir un établissement scolaire de référence au primaire, reconnu pour son excellence
                académique, son environnement stimulant et son engagement envers le développement
                des élèves. <br />
                - Préparer les élèves à réussir dans un monde en constante évolution, en leur donnant les
                outils et les compétences nécessaires pour relever les défis et saisir les opportunités.<br />
                - Favoriser le développement de citoyens responsables, ouverts d'esprit et respectueux des
                valeurs de la société.<br />
                - Créer une communauté scolaire dynamique et solidaire, où les élèves, les enseignants et
                les parents travaillent ensemble pour atteindre des objectifs communs.
              </p>
              <h1 className="text-blue-700 font-semibold text-lg mt-4 dark:text-white">
                3. Nos Valeurs :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Respect. <br />
                - Tolérance.<br />
                - Solidarité.<br />
                - Citoyenneté responsable.<br />
                - Excellence académique. <br />
                - Développement personnel.<br />

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <BackToTop />
    </>
  )
}

export default Primaire