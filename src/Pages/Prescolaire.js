import React from 'react'
import BackToTop from "../Components/BackToTop";
import Prescolairee from "../Images/Sec7.png"

const Prescolaire = () => {
  window.scrollTo(0, 0);
  return (
    <> <div className='bg-gray-100'>
      <div className="w-full h-full bg-gray-100 dark:bg-gray-800">
        <div className="w-full mx-auto py-10  dark:bg-gray-800">
          <h1 className="text-red-700 w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-8 pt-14 dark:text-white">
            PRÉSCOLAIRE
          </h1>
          {/* Blog Cover */}
          <img
            src={Prescolairee}
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
              <h1 className="text-red-700 font-semibold text-lg mt-4 dark:text-white">
                1. Nos Objectifs :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Offrir un environnement d'apprentissage stimulant et sécuritaire pour les enfants. <br />
                - Favoriser le développement cognitif, social, émotionnel et physique des enfants. <br />
                - Encourager la curiosité, la créativité et l'autonomie chez les enfants. <br />
                - Établir des relations positives avec les familles et la communauté. <br />
                - Préparer les enfants pour une transition réussie vers l'école primaire. <br />
              </p>
              <h1 className="text-red-700 font-semibold text-lg mt-4 dark:text-white">
                2. Notre Vision lointaine :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Devenir un modèle d'excellence en éducation préscolaire, reconnu pour notre approche
                innovante et notre engagement envers le développement des enfants. <br />
                - Créer un environnement d'apprentissage qui inspire les enfants à devenir des apprenants
                à vie, des citoyens responsables et des individus épanouis. <br />
                - Favoriser une communauté d'apprentissage collaborative et inclusive, où les enfants, les
                familles et les enseignants travaillent ensemble pour atteindre des objectifs communs. <br />
                - Promouvoir le développement des compétences du 21e siècle, telles que la pensée
                critique, la résolution de problèmes et la communication efficace. <br />
                - Préparer les enfants à réussir dans un monde en constante évolution, en leur donnant les
                outils et les compétences nécessaires pour relever les défis et saisir les opportunités.
              </p>
              <h1 className="text-red-700 font-semibold text-lg mt-4 dark:text-white">
                3. Nos Valeurs :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Respect. <br />
                - Empathie. <br />
                - Curiosité. <br />
                - Créativité. <br />
                - Responsabilité. <br />
                - Collaboration. <br />
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

export default Prescolaire