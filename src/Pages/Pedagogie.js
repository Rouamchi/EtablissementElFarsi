import React from 'react'
import BackToTop from "../Components/BackToTop";
// import Bags from "../Images/bags.jpg"
// import Accessoire from "../Images/accessoires.png"
import Sec1 from "../Images/Sec1.png"
import Sec2 from "../Images/Sec2.png"
import Sec5 from "../Images/Sec5.png"
import Sec6 from "../Images/Sec6.png"

const Pedagogie = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="bg-gray-100">
        <div className="container px-6 py-10 mx-auto md:py-16 mt-0">
          <div className="flex justify-center items-center mt-0">
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
              <div role="main" className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-mono leading-9 text-center text-blue-900 dark:text-gray-50">
                  Une pédagogie unique axée sur l'épanouissement et la réussite !
                </h1>
              </div>

            </div>
          </div>
          {/* --------------------- */}
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="w-full md:w-1/2">
              {/* <div className="max-w-lg"> */}
              <div className="">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Permettre aux enfants d'apprendre autrement
                </h1>
                <p className="mt-6 text-blue-700 text-lg">
                  Le plaisir d’apprendre !
                </p>
                <div className="grid gap-2 mt-6 sm:grid-cols-1 text-gray-600">
                  C’est la raison d'être de cet établissement. Nous avons voulu une pédagogie qui donne à chacun sa chance. Elle est unique car inspirée du meilleur des pédagogies connues aujourd’hui. Nous les avons personnellement étudiées avant de faire notre choix. C’est, au final, la pédagogie Gattegno qui a retenu toute notre attention.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec1}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="container px-6 py-1 mx-auto md:py-1">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec2}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-lg mx-auto">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Je vois, je comprends, je sais faire, je pratique et enfin je maîtrise
                </h1>
                <p className="mt-5 leading-7 text-blue-700 text-lg">
                  Le plaisir d’apprendre
                </p>
                <div className="grid gap-3 mt-6 sm:grid-cols-1 text-gray-600">
                  Les enfants sont actifs dans leur progression. Ils acquièrent des connaissances solides sans avoir l’impression d’apprendre mais simplement parce qu’ils sont impliqués dans les activités proposées.
                  Nos pratiques développent la créativité de chacun ainsi que l’autonomie mais surtout la joie et le plaisir d’apprendre ! En effet, comme dans la pédagogie Gattegno, nous utilisons un matériel particulier qui rappelle le jeu. Tout en couleur, il donne envie d’apprendre et de connaître encore plus de choses.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="container px-6 py-10 mx-auto md:py-16 mt-6">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="w-full md:w-1/2">
              <div className="">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Les enseignants choisis pour leur engagement
                </h1>
                <p className="mt-6 text-blue-700 text-lg">
                  Le plaisir d’enseigner
                </p>
                <div className="grid gap-2 mt-6 sm:grid-cols-1 text-gray-600">
                  Notre pédagogie nécessite des professeurs engagés dans la réussite des enfants. Plus que délivrer un savoir, ils sont à l’écoute de chacun, s’adaptent au rythme de chaque enfant pour lui permettre d’apprendre mais surtout de retenir.

                  La journée s’organise selon une alternance de travail individuel et collectif, avec des activités propres à chaque classe ou communes à deux classes. Des ateliers variés sont régulièrement mis en place. Développer la créativité, la confiance en soi et l’esprit d’initiative sont au coeur de notre projet éducatif.
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec5}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="container px-6 py-1 mx-auto md:py-1">
          <div className="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={Sec6}
                alt="sac"
                className="w-full h-52 md:h-96 max-w-2xl rounded"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-lg mx-auto">
                <h1 className="text-xl font-medium tracking-wide text-amber-400 md:text-2xl">
                  Ce que l’on apprend ici n’est pas uniquement scolaire
                </h1>
                <p className="mt-5 leading-7 text-blue-700 text-lg">
                  Un véritable mode de vie pour les enfants !
                </p>
                <div className="grid gap-3 mt-6 sm:grid-cols-1 text-gray-600">
                  Le cadre de vie, l’organisation du temps scolaire, l’importance accordée à la vie sociale, l’ouverture de l’école sur le monde : tous ces choix fondamentaux permettent de créer un climat de confiance qui favorise l’apprentissage de la vie sociale, la confiance en soi et l’épanouissement personnel.
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border border-amber-400 mt-20" />
      </div>
      <BackToTop />
    </>
  )
}

export default Pedagogie