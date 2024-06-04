import React from "react";
import Logo from "../components/Logo";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Experience = () => {
  return (
    <React.Fragment>
      <section className=" container mx-auto w-full md:py-8 scroll-m-20 max-w-2xl lg:max-w-4xl ">
        <h2 className="flex flex-row items-center gap-2 text-white text-2xl">
          <Logo icon="fluent-mdl2:work" color="white" />
          Experiencia laboral
        </h2>
        <div className="mt-16 mb-16">
          <Work
            job={"Frontend developer"}
            company={"Acrux Martech"}
            time={"Abril 2023 - abril 2024"}
            description={
              "Responsable del desarrollo de aplicaciones cliente y back-office desde cero con Angular, Firebase y Supabase. Creación de interfaces con Angular Material y componentes personalizados. Backend con Node.js, Feathers.js y PostgreSQL."
            }
          />
          <Work
            job={"Frontend developer"}
            company={"Certicalia"}
            time={"Junio 2022 - enero 2023"}
            description={
              "Responsable del desarrollo de aplicaciones cliente y back-office desde cero con Angular, Firebase y Supabase. Creación de interfaces con Angular Material y componentes personalizados. Backend con Node.js, Feathers.js y PostgreSQL."
            }
          />
          <Work
            job={"Programador junior"}
            company={"Hiberus"}
            time={"Octubre 2021 - abril 2022"}
            description={
              "Responsable del desarrollo de aplicaciones cliente y back-office desde cero con Angular, Firebase y Supabase. Creación de interfaces con Angular Material y componentes personalizados. Backend con Node.js, Feathers.js y PostgreSQL."
            }
          />
        </div>
        <Skills />
      </section>
    </React.Fragment>
  );
};

export default Experience;
