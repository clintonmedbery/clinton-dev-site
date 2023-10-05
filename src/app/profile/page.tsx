import { PageWrapper } from "../components/PageWrapper";

export default function ProvisioningTools() {
  return (
    <PageWrapper>
      <div className="text-4xl pb-4">Resume</div>
      <div className="border-b border-t border-b-indigo-800">
        <div className="text-2xl pt-2">D2iQ</div>
        <div className="text-l">Senior Software Engineer</div>
        <div className="text-l">June 2021 - October 2023</div>

        <ul className="list-disc list-inside pt-4">
          <li className="pt-2">
            Owned features by taking an Epic from basic expectations to
            gathering business requirements, writing stories, and eventually
            coding features with 100% completion rate.
          </li>
          <li className="pt-2">
            Leverages expertise in React, TypeScript, GraphQL, and Node.js to
            develop systems that interact with Kubernetes, enabling efficient
            resource management and deployment of containerized applications
            such as Grafana, Prometheus, and others.{" "}
          </li>
          <li className="pt-2">
            Led a project using Cluster API to create an application that can
            provision Kubernetes clusters in multiple cloud providers including
            Azure (CAPZ), AWS (CAPA), vSphere (CAPV) and VMWare Cloud Director
            (CAPVCD) using the concept of multitenancy. • Identified upstream
            issues and made open source contributions when necessary in repos
            such as the JavaScript Kubernetes client.{" "}
          </li>
          <li className="pt-2">
            Led the effort to transfer 100% of our CI from TeamCity to GitHub
            Actions. • Proficient in using Cypress and Jest for end-to-end
            testing of web applications, including writing automated tests,
            setting up test suites, and integrating with continuous
            integration/continuous deployment (CI/CD) pipelines.{" "}
          </li>
          <li className="pt-2">
            Actively contribute to the development and maintenance of an open
            source React UI component library that is utilized to support the
            development of a company’s main application. • Identify and mitigate
            critical CVEs.{" "}
          </li>
          <li className="pt-2 pb-2">
            Using Golang to help maintain an internal server called CAPIMate to
            provide Kubernetes resource schema to our UI Application.{" "}
          </li>
        </ul>
      </div>
      <div className="border-b border-b-indigo-800">
        <div className="text-2xl pt-4">Engage Talent</div>
        <div className="text-l">Senior Software Engineer</div>
        <div className="text-l">December 2019 – June 2021</div>

        <ul className="list-disc list-inside pt-4">
          <li className="pt-2">
            Full-Stack developer building HR applications using Node, React and
            Elasticsearch.
          </li>
          <li className="pt-2">
            Leveraged CircleCI and AWS to automate deployments and save manpower
            by limiting manual deployments.
          </li>
          <li className="pt-2">
            Updated React to use hooks instead of class components and educated
            team members on how to take advantage of functional components.
          </li>
          <li className="pt-2">
            Created a common React library to be shared across applications and
            made components explorable in Storybook.
          </li>
          <li className="py-2">
            Setup shell scripts to spin up docker containers and run DB
            migrations with Flyway.
          </li>
        </ul>
      </div>
      <div className="border-b border-b-indigo-800">
        <div className="text-2xl pt-4">Ceterus</div>
        <div className="text-l">Senior Software Engineer</div>
        <div className="text-l">May 2018 – December 2019</div>

        <ul className="list-disc list-inside pt-4">
          <li className="pt-2">
            Full-Stack developer using continuous integration to deliver regular
            updates for Ceterus’ Fintech software solutions.
          </li>
          <li className="pt-2">
            Back-end RESTful services using PHP, Slim Framework, and MySQL for
            persistence.
          </li>
          <li className="pt-2">
            Front-end development using React, Redux, Hooks, Ant Design and
            Storybook.
          </li>
          <li className="pt-2">
            Assisted leadership by fleshing out epics, breaking down stories,
            and managing Jira documentation/requirements.
          </li>
          <li className="py-2">
            Taught bi-weekly lunch and learns focused on teaching less technical
            co-workers minor coding skills that could be useful in their roles.
          </li>
        </ul>
      </div>
      <div className="text-2xl pt-4">Booz Allen Hamilton</div>
      <div className="text-l">March 2016 – May 2018</div>
      <div className="text-l pt-4">SecureGive Project</div>
      <div className="text-l">Mid Software Engineer</div>

      <ul className="list-disc list-inside pt-4">
        <li className="pt-2">
          Back-end RESTful service using Scala, Akka HTTP, Slick, and PostgreSQL
          for persistence.
        </li>
        <li className="pt-2">
          Web development including leveraging technologies React, Redux,
          Reselect, Babel, Semantic, Jest, nginx, and Webpack.
        </li>
        <li className="pt-2">
          Helped create an iPad kiosk with Swift and CocoaPods that processed
          credit card transactions through a Lilitab reader.
        </li>
        <li className="pt-2">
          Used Electron, Node and React to write a Windows application that
          would process transactions with a credit card.
        </li>
        <li className="pt-2">
          Worked with React Native and Flow to write an iOS/Android app where
          users could donate money to the organization of their choice.
        </li>
      </ul>
      <div className="text-l pt-4">
        Veterans Benefits Management System Ratings Project
      </div>
      <div className="text-l">Junior Software Engineer</div>

      <ul className="list-disc list-inside pt-4">
        <li className="pt-2">
          Worked on Veteran’s Rule management system using Java stack that
          included Oracle SQL Server, Spring Boot, Liquibase, and Hibernate.
        </li>
        <li className="pt-2">
          Used JPA Named Entity Graphs and Hibernate to lazy load objects where
          appropriate in order to ensure a performant application.
        </li>
        <li className="pt-2">
          Wrote an intuitive front-end using AngularJS and Bootstrap that
          allowed users to manage business rules for veteran claims.
        </li>
        <li className="pt-2">
          Wrote unit tests in new and legacy code to reach a milestone of 80%
          coverage after starting from 30%.
        </li>
      </ul>
    </PageWrapper>
  );
}
