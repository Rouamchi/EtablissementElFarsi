import React from 'react'
import BackToTop from "../Components/BackToTop";
import Lyceee from "../Images/LyceeHero.png"

const Lycee = () => {
  window.scrollTo(0, 0);
  return (
    <> <div className='bg-gray-100'>
      <div className="w-full h-full bg-gray-100 dark:bg-gray-800">
        <div className="w-full mx-auto py-10  dark:bg-gray-800">
          <h1 className="text-amber-400 w-[92%] mx-auto lg:text-4xl md:text-3xl xs:text-2xl text-center font-serif font-semibold pb-8 pt-14 dark:text-white">
            LYCEE
          </h1>
          {/* Blog Cover */}
          <img
            src={Lyceee}
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
              <h1 className="text-amber-400 font-semibold text-lg mt-4 dark:text-white">
                1. Nos Objectifs :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Offrir une éducation de qualité aux élèves du collège et lycée, en favorisant leur développement cognitif,
                social, émotionnel et physique. <br />
                - Préparer les élèves à réussir dans leurs études supérieures et dans leur vie professionnelle, en leur
                donnant les compétences nécessaires pour relever les défis et saisir les opportunités.<br />
                - Favoriser les valeurs de respect, de tolérance, de solidarité et de citoyenneté responsable chez les élèves.<br />
                - Encourager la créativité, l'innovation et l'esprit critique chez les élèves.<br />
                - Établir des relations positives avec les parents et la communauté, pour travailler ensemble à
                l'épanouissement des élèves.
              </p>
              <h1 className="text-amber-400 font-semibold text-lg mt-4 dark:text-white">
                2. Notre Vision lointaine :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Devenir un établissement scolaire de référence au niveau régional ou national, reconnu pour son
                excellence académique, son environnement stimulant et son engagement envers le développement des
                élèves. <br />
                - Préparer les élèves à devenir des citoyens responsables, ouverts d'esprit et respectueux des valeurs de la
                société, capables de contribuer au développement de leur communauté et de leur pays.<br />
                - Favoriser le développement de compétences nécessaires pour réussir dans un monde en constante
                évolution, telles que la communication, la collaboration, la pensée critique et la résolution de problèmes.<br />
                - Créer une communauté scolaire dynamique et solidaire, où les élèves, les enseignants et les parents
                travaillent ensemble pour atteindre des objectifs communs.
              </p>
              <h1 className="text-amber-400 font-semibold text-lg mt-4 dark:text-white">
                3. Nos Valeurs :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Excellence académique. <br />
                - Respect. <br />
                - Tolérance. <br />
                - Solidarité. <br />
                - Citoyenneté responsable. <br />
                - Innovation. <br />
                - Créativité. <br />
              </p>
              <h1 className="text-amber-400 font-semibold text-lg mt-4 dark:text-white">
                4. Nos Objectifs spécifiques :
              </h1>
              <p className="mt-2 text-md dark:text-gray-300">
                - Améliorer les résultats scolaires des élèves. <br />
                - Augmenter le taux de réussite au brevet et au baccalauréat. <br />
                - Favoriser l'intégration des technologies de l'information et de la communication dans l'enseignement et
                l'apprentissage. <br />
                - Développer les programmes d'éducation à la citoyenneté et à la responsabilité sociale. <br />
                - Renforcer les liens avec les parents et la communauté. <br />
                Ces objectifs et cette vision lointaine peuvent servir de guide pour les décisions et les actions du collège et
                lycée El farsi, et aider à créer un environnement d'apprentissage positif et stimulant pour les élèves.
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

export default Lycee