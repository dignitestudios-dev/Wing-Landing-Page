import React from "react";
import { Logo } from "../assets/export";

const PrivacyPolicy = () => {
  return (
    <div className="main-container">
      <div className="privacy-container">
        <div className="logo-container">
          <img src={Logo} className="logo-img" alt="WingX Logo" />
        </div>

        {/* Main Heading */}
        <h1 className="privacy-main-heading">Privacy Policy</h1>
        <p className="privacy-date">Effective as of May 19, 2024</p>

        {/* Introduction */}
        <h2 className="privacy-subheading">Introduction & Definitions</h2>
        <p>
          This page details WingX’s Privacy Policy, or “Policy,” which explains
          how we collect, store, protect, and share your information, and with
          whom we share it. The WingX mobile application and website (together
          “WingX” or the “App”) are operated by WingX LLC, a Massachusetts
          limited liability company (“we” or “us” or “the Company”), which is
          responsible for handling personal information collected and processed
          through the WingX App and Sites. Any questions can be directed to
          <br />
          <span className="email-red">legal@wingxapp.com.</span>
        </p>

        {/* Information We Collect */}
        <h2 className="privacy-subheading">Information We Collect</h2>
        <p>
          You choose to give us certain information when using our WingX mobile
          application and website. This includes:
        </p>
        <ul>
          <li>
            When you create an account, you provide us with at least your phone
            number, as well as some basic details necessary for the service to
            work, such as your gender, date of birth, photographs, and who you’d
            like to connect with.
          </li>
          <li>
            When you complete your profile, you have the option to share your
            sexual orientation, ethnicity, religious beliefs, and political
            opinions with us. Where you provide such elements to us, you consent
            to us using it for the purposes identified and as laid out in this
            Privacy Policy. You can also share additional information with us,
            such as details on your bio and your interests, as well as
            additional content such as more photographs, videos, and audio
            clips. To add certain content, like pictures or videos, you may
            allow us to access your camera, photo album, or microphone.
          </li>
          <li>
            When you subscribe to a paid service or make a purchase directly
            from us (rather than through a platform such as iOS or Android), you
            provide us with information related to the purchases you make and
            our payment processors with information such as your debit or credit
            card number or other financial information.
          </li>
          <li>
            When you participate in surveys, focus groups or market studies, you
            give us your insights into our products and services, responses to
            our questions and testimonials.
          </li>
          <li>
            When you choose to participate in our promotions, events or
            contests, we collect the information that you use to register or
            enter.
          </li>
          <li>
            If you contact us (e.g., through our customer care team or on social
            media), we collect the information you give us during the
            interaction.
          </li>
          <li>
            If you share with us information about other people (for example, if
            you use contact details of a friend for a given feature), we process
            this information on your behalf in order to complete your request.
          </li>
          <li>
            We may also process your chats with other users as well as the
            content you publish to keep our community safe.
          </li>
        </ul>

        {/* Information from Others */}
        <h2 className="privacy-subheading">
          Information we receive from others
        </h2>
        <p>
          In addition to the information you may provide us directly, we receive
          information about you from others, including:
        </p>
        <ul>
          <li>
            <span className="smallheading">Users:</span>Users may provide
            information about you as they use our services, for example as they
            interact with you or if they submit a report involving you.
          </li>
          <li>
            <span className="smallheading">Social Media:</span> You may decide
            to share information with us through your social media account, for
            example if you decide to create and log into your WingX account via
            your social media or other account (e.g., Facebook, Google or Apple)
            or to upload onto our services information such as photos from one
            of your social media accounts (e.g., Facebook or Instagram).
          </li>
          <li>
            <span className="smallheading">Other Partners:</span> We may receive
            information about you from our partners where our ads are published
            on a partner’s service (in which case they may pass along details on
            a campaign’s success). Where legally allowed, we can also receive
            information about suspected or convicted bad actors from third
            parties as part of our efforts to ensure our users’ safety and
            security.
          </li>
        </ul>

        {/* Continue the same way for all the rest of your sections */}
        <h2 className="privacy-subheading">
          Information generated or automatically collected when you use our
          services
        </h2>
        <ul>
          <li>
            <span className="smallheading">Usage Information:</span>Using the
            services generates data about your activity on our services, for
            instance how you use them (e.g., when you logged in, features you’ve
            been using, actions taken, information shown to you, referring
            webpages address and ads that you interacted with) and your
            interactions with other users (e.g., users you connect and interact
            with, and when you matched and exchanged messages with them).
          </li>
          <li>
            <span className="smallheading">Device Information:</span> We collect
            information from and about the device(s) you use to access our
            services, including hardware and software information such as IP
            address, device ID and type, apps settings and characteristics, app
            crashes, advertising IDs (which are randomly generated numbers that
            you can reset by going into your device’ settings and, in some
            cases, disable entirely), and identifiers associated with cookies or
            other technologies that may uniquely identify a device or browser.
          </li>
          <li>
            <span className="smallheading">
              Information collected by cookies and similar technologies:
            </span>{" "}
            We use and may allow others to use cookies and similar technologies
            (e.g., web beacons, pixels and SDKs) to recognize you and/or your
            device(s). Some web browsers (including Safari, Internet Explorer,
            Firefox and Chrome) have a “Do Not Track” (“DNT”) feature that tells
            a website that a user does not want to have his or her online
            activity tracked. If a website that responds to a DNT signal
            receives a DNT signal, the browser can block that website from
            collecting certain information about the browser’s user. Not all
            browsers offer a DNT option and DNT signals are not yet uniform.
          </li>
        </ul>

        <h2 className="privacy-subheading">
          Other information with your consent
        </h2>
        <ul>
          <li>
            <span className="smallheading">Precise geolocation data: </span>
            If you give us your consent, we can collect your precise geolocation
            (latitude and longitude) from your device. The collection of your
            geolocation may occur in the background even when you aren’t using
            the services if the permission you gave us expressly permits such
            collection. If you decline permission for us to collect your precise
            geolocation, we will not collect it, and our services that rely on
            precise geolocation may not be available to you.
          </li>
          <li>
            <span className="smallheading">Other information: </span> We may
            collect other information with your permission, such as photos and
            videos (for instance, if you want to publish a photo or video or
            participate in streaming features on our services).
          </li>
        </ul>
        <ul className="ulstyle">
          <li>
            <span className="smallheading">Use of Information: </span>
            If you give us your consent, we can collect your precise geolocation
            (latitude and longitude) from your device. The collection of your
            geolocation may occur in the background even when you aren’t using
            the services if the permission you gave us expressly permits such
            collection. If you decline permission for us to collect your precise
            geolocation, we will not collect it, and our services that rely on
            precise geolocation may not be available to you.
          </li>
        </ul>

        <ul>
          <li>
            <span className="smallheading">
              To administer your account and provide our services to you.{" "}
            </span>{" "}
            This includes creating and managing your account and profile;
            providing you with customer support and responding to your requests;
            communicating with you about our services; personalizing pricing,
            offering discounts and other promotions, and completing your
            transactions; and administering sweepstakes and contests.
            <p>
              .Legal basis: Provide our service to you, contractual necessity
            </p>
          </li>
          <li>
            {" "}
            <span className="smallheading">
              To provide offers and operate advertising and marketing campaigns.
            </span>{" "}
            . This includes performing and measuring the effectiveness of
            advertising campaigns on our services and marketing our services off
            our platform; and communicating with you about products or services
            that we believe may interest you.
            <p>.Legal basis: Legitimate interests, consent</p>
          </li>
          <li>
            {" "}
            <span className="smallheading">
              To improve our services and develop new ones.
            </span>{" "}
            This includes administering focus groups, market studies and
            surveys; reviewing interactions with customer care teams to improve
            our quality of service; understanding how users typically use the
            services to improve them (for example, we may modify a given feature
            or graphical user interface based on how users engage with it); and
            developing new features and services.
            <p>.Legal basis: Legitimate interests</p>
          </li>
          <li>
            {" "}
            <span className="smallheading">
              To prevent, detect and fight fraud and other illegal or
              unauthorized activities.
            </span>{" "}
            This includes finding and addressing ongoing, suspected or alleged
            violations of our Terms and Conditions of Use, notably through the
            review of reports and interactions between members; better
            understanding and designing countermeasures against violations of
            our Terms and Conditions of Use; retaining data related to
            violations of our Terms and Conditions of Use to address the
            violation and prevent against recurrences; enforcing or exercising
            our rights, for example our rights set out in our Terms and
            Conditions of Use; and communicating to individuals who submit a
            report, including what we’ve done as a result of their submission.
            <p>.Legal basis: Legitimate interests, contractual necessity</p>
          </li>
          <li>
            {" "}
            <span className="smallheading">
              To ensure legal compliance.
            </span>{" "}
            This includes complying with legal requirements; and assisting law
            enforcement.
            <p>.Legal basis: Comply with applicable laws and regulations</p>
          </li>
        </ul>
        <p>
          If you choose to provide us with information that may be considered
          “special” or “sensitive” in certain jurisdictions, such as your sexual
          orientation, you’re consenting to our processing of that information
          in accordance with this Privacy Policy. From time to time, we may ask
          for your consent to collect specific information such as your precise
          geolocation or use your information for certain specific reasons. In
          some cases, you may withdraw your consent by adapting your settings or
          by deleting your content. In any case, you may withdraw your consent
          at any time by contacting us at{" "}
          <span className="email-red">legal@wingxapp.com.</span>
        </p>
        <h2 className="privacy-subheading">Disclosure of Information</h2>
        <ul>
          <li>
            {" "}
            <span className="smallheading">With other users:</span> This You
            share information with other users when you voluntarily disclose
            information on the service, for example on your public profile. When
            you upload and choose to tell us sensitive information about
            yourself, you are explicitly consenting to our processing of this
            information and making it public to other users. Please be careful
            with your information and make sure that the content you share is
            information that you’re comfortable being visible. If you choose to
            limit the audience for all or part of your profile or for certain
            content or information about you, then it will be visible according
            to your settings. If someone submits a report involving you (such as
            a claim that you violated our Terms and Conditions of Use), we may
            communicate to the reporter actions, if any, we took as a result of
            their report.
          </li>
          <li>
            {" "}
            <span className="smallheading">
              With our service providers and partners:{" "}
            </span>{" "}
            We use vendors to help us operate, distribute, market and improve
            our services, such as data hosting and maintenance, analytics,
            customer care, marketing, advertising, payment processing and
            security operations. For example, payment processing and
            telecommunications companies use user information to facilitate
            payments for our premium services. Moderators may also have access
            to information to monitor activity on the App and approve content.
            We also share information with vendors who distribute and assist us
            in advertising our services. For example, we may share limited
            information on you in hashed, non-human readable form to advertising
            vendors.
          </li>
          <li>
            {" "}
            <span className="smallheading">For corporate transactions:</span>We
            may transfer your information if we are involved, whether in whole
            or in part, in a merger, sale, acquisition, divestiture,
            restructuring, reorganization, dissolution, bankruptcy or other
            change of ownership or control.
          </li>
          <li>
            {" "}
            <span className="smallheading">
              With law enforcement / when required by law:
            </span>{" "}
            We may disclose your information if reasonably necessary: (i) to
            comply with a legal process, such as a court order, subpoena or
            search warrant, government / law enforcement investigation or other
            legal requirements; (ii) to assist in the prevention or detection of
            crime (subject in each case to applicable law); or (iii) to protect
            the safety of any person.
          </li>
          <li>
            {" "}
            <span className="smallheading">To enforce legal rights:</span> We
            may also share information: (i) if disclosure would mitigate our
            liability in an actual or threatened lawsuit; (ii) as necessary to
            protect our legal rights and legal rights of our users, business
            partners or other interested parties; (iii) to enforce our
            agreements with you; and (iv) to investigate, prevent, or take other
            action regarding illegal activity, suspected fraud or other
            wrongdoing.
          </li>
          <li>
            {" "}
            <span className="smallheading">
              With your consent or at your request:
            </span>
            We may ask for your consent to share your information with third
            parties. In any such case, we will make it clear why we want to
            share the information. We may use and share non-personal information
            (meaning information that, by itself, does not identify who you are
            such as device information, general demographics, general behavioral
            data, location in de-identified form), as well as personal
            information in hashed, non-human readable form, under any of the
            above circumstances. We may also share this information with third
            parties (notably advertisers) to develop and deliver targeted
            advertising on our services and on websites or applications of third
            parties, and to analyze and report on advertising you see. We may
            combine this information with additional non-personal information or
            personal information in hashed, non-human readable form collected
            from other sources.
          </li>
        </ul>
        <h2 className="privacy-subheading">Your Information Rights</h2>
        <p>
          You have the following options and tools available to you to manage
          your information:
        </p>
        <ul>
          <li>
            {" "}
            <span className="smallheading">
              Access / Update tools in the mobile application.
            </span>
            Tools and account settings can help you access, rectify or remove
            information that you provided to us and that’s associated with your
            account directly within the service. If you have any questions on
            those tools and settings, please contact our customer care team for
            help.
          </li>
          <li>
            {" "}
            <span className="smallheading">Device permissions.</span>
            Mobile platforms can have permission systems for specific types of
            device data and notifications, such as phone contacts, pictures,
            location services, push notifications and advertising identifiers.
            You can change your settings on your device to either consent or
            oppose the collection or processing of the corresponding information
            or the display of the corresponding notifications. Note if you do
            that, certain services may lose functionality.
          </li>
          <li>
            {" "}
            <span className="smallheading">Uninstall.</span>
            You can stop all information collection by an app by uninstalling it
            using the standard uninstall process for your device. Remember that
            uninstalling an app does not close your account. To close your
            account, please use the corresponding functionality on the mobile
            application.
          </li>
          <li>
            {" "}
            <span className="smallheading">Account closure. </span>
            You can close your account by using the corresponding functionality
            directly on the mobile application.
          </li>
          <p>
            Depending on where you live, you may have also have the right to:
          </p>
          <li>
            {" "}
            <span className="smallheading">Access/know. </span>
            You may have the right to request a copy of the information we keep
            about you, and in certain circumstances to receive this in a
            portable format. You can exercise your right to access directly
            within the service by putting in a request at help@wingxapp.com.
          </li>
          <li>
            {" "}
            <span className="smallheading">Delete/erase.</span>
            You may request that we delete the personal information we keep
            about you. You can exercise your right to delete by submitting a
            request with help@wingxapp.com.
          </li>
          <li>
            {" "}
            <span className="smallheading">Correct/rectify/update. </span>. You
            can correct most information you provided to us by editing your
            profile directly in the service. If you believe the information we
            hold about you is inaccurate, you may contact us at
            help@wingxapp.com to rectify it.
          </li>
          <li>
            {" "}
            <span className="smallheading">Object/restrict. </span> You may also
            have the right to object to or request that we restrict certain
            processing. To do so, please contact us at help@wingxapp.com.
          </li>
        </ul>
        <p>
          For your protection and the protection of all of our users, we may ask
          you to provide proof of identity before we can answer the above
          requests. Keep in mind, we may reject requests, including if we are
          unable to authenticate you, if the request is unlawful or invalid, or
          if it may infringe on trade secrets or intellectual property or the
          privacy or other rights of someone else. If you wish to receive
          information relating to another user, such as a copy of any messages
          you received from them through our service, the other user will have
          to contact us to submit a separate request for their information. We
          may also ask them to provide proof of identity before we can answer
          the request. Also, we may not be able to accommodate certain requests
          to object to or restrict the processing of personal information,
          notably where such requests would not allow us to provide our service
          to you anymore. For instance, we cannot provide our service if we do
          not have your date of birth and thus cannot ensure that you are 18
          years of age or older.
        </p>
        <h2 className="privacy-subheading">Region-specific Rights</h2>
        <p>
          If you are a resident of Virginia, Colorado, or Connecticut, United
          States of America, and if we deny your privacy request, you may be
          able to appeal by contacting us at{" "}
          <span className="email-red">legal@wingxapp.com.</span>, and explicitly
          referencing “Privacy Request Appeal.” If you have concerns about the
          result of your appeal you may contact the attorney general for your
          state. Additionally, please note that we do not “sell” your personal
          data, or use it for “targeted advertising” or “profiling” in
          furtherance of decisions that produce legal or similarly significant
          effects, as those terms are defined by applicable law in your state,
          so no opt-out choice is necessary.
        </p>
        <p>
          In certain countries, including in the European Economic Area and the
          United Kingdom, you have a right to lodge a complaint with the
          appropriate data protection authority if you have concerns about how
          we process your personal information. You can find information about
          your data protection regulator in the European Economic Area here, and
          in the United Kingdom here. The data protection authority you can
          lodge a complaint with may be that of your habitual residence, where
          you work or where an alleged infringement took place.
        </p>
        <h2 className="privacy-subheading">California Privacy Rights </h2>

        <p>
          For Users who are California residents, you have the following rights
          (in addition to those listed in section 5 above) under the California
          Consumer Privacy Act (hereafter known as the CCPA), and you have the
          right to be free from unlawful discrimination for exercising your
          rights under the Act:
        </p>
        <ul>
          <li>
            You have the right to request that we disclose certain information
            to you and explain how we have collected, used and shared your
            personal information over the past 12 months.
          </li>
          <li>
            You have the right to request that we delete your personal
            information that we collected from you, subject to certain
            exceptions.
          </li>
          <p>
            Some of the information we collect also constitutes “sensitive
            personal information” under the CCPA, including information that
            reveals your precise geolocation, racial or ethnic origin, sex life
            or sexual orientation, religious or philosophical beliefs, and
            contents of your messages. We do not use sensitive personal
            information we collect for purposes other than providing and
            improving our services to you and protecting our services and our
            community, and we do not use sensitive personal information to infer
            characteristics about you.
          </p>
          <p>
            California’s “Shine the Light” law, Civil Code section 1798.83,
            requires certain businesses to respond to requests from California
            customers asking about the businesses’ practices related to
            disclosing personal information to third parties for the third
            parties’ direct marketing purposes. If you wish to find out about
            any rights you may have under California Civil Code section 1798.83,
            you can write to us at{" "}
            <span className="email-red">legal@wingxapp.com.</span>
          </p>
          <p>
            From time to time, as part of a joint promotion with a third party,
            we may, if you participate in such promotion, disclose your contact
            information to the third party to allow them to market their
            products or services to you. Where this is a condition for
            participation in a promotion, we will always let you know before
            when you enter the promotion. Please follow the instructions
            provided to you by third parties to unsubscribe from their messages.
          </p>
          <p>
            In addition, under California law, operators of online services are
            required to disclose how they respond to “do not track” signals or
            other similar mechanisms that provide consumers the ability to
            exercise choice regarding the collection of personal information of
            a consumer over time and across third party online services, to the
            extent the operator engages in that collection. At this time, we do
            not track our Users’ personal information over time and across
            third-party online services. This law also requires operators of
            online services to disclose whether third parties may collect
            personal information about their users’ online activities over time
            and across different online services when the users use the
            operator’s service. We do not knowingly permit third parties to
            collect personal information about an individual User’s online
            activities over time and across different online services when using
            the WingX App.
          </p>
        </ul>

        <h2 className="privacy-subheading">
          How Long We Retain Your Information and Deletion
        </h2>
        <p>
          We keep your personal information only as long as we need it for
          legitimate business purposes as laid out in Section 3 and as permitted
          by applicable law. If you decide to stop using our services, you can
          close your account and your profile will stop being visible to other
          users. After your account is closed, we will delete your personal
          information, as laid out below:
        </p>
        <p>
          When your Account is deleted, we make sure it is no longer viewable in
          the App. For up to 28 days, it is still possible to restore your
          Account if it was accidentally deleted. After 28 days, we begin the
          process of deleting your personal information from our systems,
          unless:
        </p>
        <ul>
          <li>we must keep it to comply with applicable law;</li>
          <li>
            we must keep it to evidence our compliance with applicable law;
          </li>
          <li>
            there is an outstanding issue, claim or dispute requiring us to keep
            the relevant information until it is resolved; or
          </li>
          <li>
            the information must be kept for our legitimate business interests,
            such as fraud prevention and enhancing users’ safety and security{" "}
          </li>
        </ul>
        <p>
          Even after you remove information from your profile or delete your
          Account, copies of that information may still be viewable and/or
          accessed to the extent such information has been previously shared
          with others, or copied or stored by others. We cannot control this,
          nor do we accept any liability for this. If you have given third party
          applications or websites access to your personal information, they may
          retain such information to the extent permitted under their terms of
          service or privacy policies.
        </p>
        <h2 className="privacy-subheading">No Children Allowed</h2>
        <p>
          WingX and its services are restricted to individuals who are 18 years
          of age or older. We do not permit individuals under the age of 18 on
          our platform. WingX does not knowingly collect any information about
          or market to children, minors or anyone under the age of 18. If we
          become aware that a child, minor or anyone under the age of 18 has
          registered with us and provided us with personal information, we will
          take steps to terminate that person’s registration.
        </p>
        <h2 className="privacy-subheading">Privacy Policy Changes</h2>
        <p>
          WingX may revise this Privacy Policy from time to time. The most
          current version of the policy will govern our use of your information
          and will always be available on our website. If we make a change to
          this policy that, in our sole discretion, is material, we will notify
          you, for example, via an email to the email associated with your
          Account or by posting a notice within the WingX app or website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
