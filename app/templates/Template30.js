export function template30(resume) {
  var {
    personDetail,
    educationDetail,
    workExperience,
    skills,
    userHobbies,
    userSummary,
    jobPosition,
    certificatesDetail,
    awardsDetail,
    referenceDetail,
  } = resume.details;

  const education = educationDetail;
  const experience = workExperience;
  const hobbies = userHobbies;

  const certificates = certificatesDetail;
  const awards = awardsDetail;
  const references = referenceDetail;

  function cleanMonth(month) {
    return month == 0 ? "" : "-" + month.toString().padStart(2, "0");
  }

  function renderCertificate() {
    let certificateHtml = "";
    if (certificates && certificates.length > 0) {
      certificateHtml = `
        <div
        id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
        class="section SECTION_EDUC noparagraph multi-para has-title"
        data-section-cd="EDUC"
      >
        <div class="doc-item">
          <div class="heading">
            <div class="sectiontitle" id="SECTIONNAME_EDUC">
              Certification<span
                title=" Education "
                class="rename-section text-rename"
              ></span>
            </div>
          </div>
            ${certificates
              .map(
                (element) =>
                  `<div class="single-column">
           <span class="padded-line"
             ><span class="degree"></span><span class="program-line">${
               element.certificate
             }</span></span
           >
           <br/>
           <span> </span><span class="padded-line txtItalics"
             ><span
               class="companyname companyname_educ"
               dependency="SCHO"
               >${element.institute}</span
             ><span> - </span>
             <span class="job-location jobcity">${element.Year}${cleanMonth(
                    element.fromMonth
                  )}</span
             ><span> </span
             ><span class="job-location jobstate"></span></span
           ><span class="padded-line"><span class="field"></span></span>
           </div>`
              )
              .join("")}
              </div>
              </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <div
        id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
        class="section SECTION_EDUC noparagraph multi-para has-title"
        data-section-cd="EDUC"
      >
        <div class="doc-item">
          <div class="heading">
            <div class="sectiontitle" id="SECTIONNAME_EDUC">
              Awards<span
                title=" Education "
                class="rename-section text-rename"
              ></span>
            </div>
          </div>
            ${awards
              .map(
                (element) =>
                  `<div class="single-column">
           <span class="padded-line"
             ><span class="degree"></span><span class="program-line">${element.awards}</span></span
           >
           <br/>
           <span> </span><span class="padded-line txtItalics"
             ><span
               class="companyname companyname_educ"
               dependency="SCHO"
               >${element.institute}</span
             ><span> - </span>
             <span class="job-location jobcity">${element.Year}</span
             ><span> </span
             ><span class="job-location jobstate"></span></span
           ><span class="padded-line"><span class="field"></span></span>
           </div>`
              )
              .join("")}
              </div>
              </div>`;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
        <div
        id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
        class="section SECTION_EDUC noparagraph multi-para has-title"
        data-section-cd="EDUC"
      >
        <div class="doc-item">
          <div class="heading">
            <div class="sectiontitle" id="SECTIONNAME_EDUC">
              Reference<span
                title=" Education "
                class="rename-section text-rename"
              ></span>
            </div>
          </div>
            ${references
              .map(
                (element) =>
                  `<div class="single-column">
           <span class="padded-line"
             ><span class="degree"></span><span class="program-line">${element.reference}</span></span
           >
           
           <span> </span><span class="padded-line txtItalics"
             ><span
               class="companyname companyname_educ"
               dependency="SCHO"
               >${element.institute}</span
             ><span> </span>
            
           </div>`
              )
              .join("")}
              </div>
              </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      const skillNames = skills.map((element) => element.name);
      const skillsString = skillNames.join(", ");
      skillsHtml = `
        <div class="section skills">
          <div class="heading">
            <div  class="sectiontitle" id="SECTIONNAME_EDUC">Skills</div>
          </div>
          <p>${skillsString}</p>
        </div>
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      const hobbyNames = hobbies.map((element) => element.name);
      const hobbyString = hobbyNames.join(", ");
      hobbyHtml = `
        <div class="section skills">
          <div class="heading">
            <div  class="sectiontitle" id="SECTIONNAME_EDUC">Hobbies</div>
          </div>
          <p>${hobbyString}</p>
        </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `<div class="heading">
          <div class="sectiontitle" id="SECTIONNAME_EXPR">
            Work History<span
              title=" Work History "
              class="rename-section text-rename"
            ></span>
          </div>
        </div>`;
      experience.forEach((element) => {
        result += ` 
          <div class="">
            <div class="sortableInner">
              <div
                id="PARAGRAPH_EXPR_0"
                class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text"
              >
                <div class="clearfix doc-item">
                  <div class="singlecolumn">
                    <span class="dispBlk" dependency="JTIT|JSTD|EDDT">
                      <span class="txt-bold" id="FIELD_JTIT"
                        >${element.position}</span
                      ><span dependency="JTIT+JSTD|EDDT">, </span>
                      <span dependency="JSTD|EDDT">
                        <span id="FIELD_JSTD" format="%m/%Y"
                          >${element.fromYear}${cleanMonth(
          element.fromMonth
        )}</span
                        ><span
                          class="xslt_static_change"
                          dependency="JSTD+EDDT"
                        >
                          - </span
                        ><span id="FIELD_EDDT" format="%m/%Y"
                        ${element.toYear}${cleanMonth(element.toMonth)}</span
                        >
                      </span>
                    </span>
                    <span
                      class="dispBlk"
                      dependency="COMP|JCIT|JSTA|JCNT|JLOC"
                    >
                      <span class="txt-bold" id="FIELD_COMP"
                        >${element.company}</span
                      ><span dependency="COMP"
                        ><span dependency="JCIT|JSTA|JCNT|JLOC">
                          -
                        </span></span
                      >
                      <span id="FIELD_JCIT"> </span
                      ><span dependency="JCIT+JSTA|JCNT"> </span>
                      <span id="FIELD_JSTA"></span
                      ><span id="FIELD_JCNT">${element?.city ?? []}</span>
                      <span id="FIELD_JLOC"></span>
                    </span>
                    <span id="FIELD_JDES"
                      ><ul>`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}   
                  </ul></span>
                  <br/>
                </div>
              </div>
            </div>
            <div
              id="PARAGRAPH_EXPR_-1"
              class="paragraph PARAGRAPH_EXPR placeholder-text" >
            </div>
            <div
              id="PARAGRAPH_EXPR_-2"
              class="paragraph PARAGRAPH_EXPR placeholder-text"
            >
              <div class="clearfix doc-item">
                <div class="singlecolumn">
                  <span id="FIELD_JDES"></span>
                </div>
              </div>
            </div>
          </div>
        </div> <br/>`;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `<div class="heading">
        <div class="sectiontitle" id="SECTIONNAME_EDUC">
          Education<span
            title=" Education "
            class="rename-section text-rename"
          ></span>
        </div>
      </div>`;
      education.forEach((element) => {
        result += ` <div class="">
          <div class="">
            <div
              id="PARAGRAPH_EDUC_0"
              class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text"
            >
              <div class="clearfix doc-item">
                <div class="singlecolumn">
                  <span
                    class="dispBlk"
                    dependency="DGRE|STUY|GRYR|GRST|GRED|GRIP"
                  >
                    <span class="txt-bold" id="FIELD_DGRE"
                      ></span
                    ><span dependency="DGRE+STUY"></span
                    ><span id="FIELD_STUY">${element.degree}</span
                    ><span id="FIELD_GRHN"></span
                    ><span dependency="DGRE|STUY|GRHN"
                      ><span dependency="GRYR|GRST|GRED|GRIP"
                        >
                      </span></span
                    >
                    <br/>
                    <span
                      class="xslt_static_change displayNoneThisField"
                      >Expected in </span
                    ><span id="FIELD_GRYR" format="%m/%Y"> ${
                      element.fromYear ?? []
                    }</span>
                    <span> - </span
                    >  <span id="FIELD_GRYR" format="%m/%Y"> ${
                      element.toYear ?? []
                    }</span>
                    </span>
                  <span
                    class="dispBlk"
                    dependency="SCHO|SCIT|SSTA|SCNT"
                  >
                    <span class="txt-bold" id="FIELD_SCHO"
                      >${element.university}</span
                    >
                    <span dependency="SCHO"
                      ><span dependency="SCIT|SSTA|SCNT">
                        -
                      </span></span
                    >
                    
                    <span id="FIELD_SSTA">${element?.city ?? []}</span>
                    <span id="FIELD_SCNT"></span>
                  </span>

                  <span id="FIELD_FRFM"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        `;
      });
    }
    return result;
  }

  return `<html>
    <head>
      <style>

      @page {
        margin: 0px;
      }

        body {
          margin: auto;
        }
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700");
        @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700");
  
        body {
          background: #fff;
          text-align: left;
          font-feature-settings: "liga" 0;
          -moz-font-feature-settings: "liga" off;
        }
        .genie table {
          border-collapse: collapse;
          border-spacing: 0;
          font-size: inherit;
          color: inherit;
          width: 100%;
        }
  
        /*START content disc style for LI*/
        .genie ul,
        .genie li {
          list-style: none;
          margin: 0 0 0 8px;
          padding: 0;
        }
        .genie ul li {
          position: relative;
          margin: 2px 0 0 0;
        }
        .genie ul li:before {
          content: "";
          font-size: 0.6em;
          position: absolute;
          left: -7px;
          top: 0;
        }
        .genie .right-box .skill ul li {
          padding-right: 10px;
        }
  
        /*Address*/
        .genie .address ul {
          margin: 0;
        }
        .genie .address li {
          display: inline-block;
          padding: 0 15px;
          margin: 0;
        }
        .genie .address li:before {
          left: -2px;
        }
        .genie .address li:first-child:before {
          content: "";
        }
        /*END content disc style for LI*/
  
        /*Helping Classes*/
        .genie .txt-bold {
          font-weight: bold;
        }
        .genie .txtItl {
          font-style: italic;
        }
        .genie .dispBlk {
          display: block;
        }
        .genie .displayNoneThisField {
          display: none;
        }
        .genie .flt-right {
          float: right;
        }
        .genie .brk-all {
          word-break: break-all;
        }
        .genie .dispInBlk {
          display: inline-block;
        }
  
        /*Document*/
        .genie {
          color: #404040;
          word-wrap: break-word;
          padding-bottom: 20px;
          min-height: 792px;
        }
        .genie .parentContainer {
          display: table;
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }
        .genie .nameSec:before {
          background: #103f84;
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          opacity: 0.15;
        }
        .genie .nameSec,
        .genie .cntcSec {
          padding-left: 10px;
          padding-right: 10px;
        }
        .genie .nameSec {
          position: relative;
          padding-left: 108px;
          padding-bottom: 30px;
          min-height: 82px;
        }
        .genie .name {
          font-family: "Montserrat";
          letter-spacing: 1px;
          color: #404040;
          font-weight: bold;
          text-transform: uppercase;
          margin-left: 77px;
          padding-top: 40px;
        }
        .genie .pathin {
          fill: #103f84;
        }
        .genie .monogram {
          width: 57px;
          height: 83px;
          float: left;
          top: 0;
          background: #000;
          position: relative;
        }
        .genie.NewSkins .dynamicIcon + .monogram,
        .genie.LUK:not(.EJS1) .dynamicIcon + .monogram,
        .genie.MPR .dynamicIcon + .monogram {
          display: none;
        } /* For POC PS-1041 */
        .genie .dynamicIcon,
        .genie .dynamicIcon > div {
          max-height: 83px;
          max-width: 57px;
        }
        .genie .dynamicIcon {
          display: table;
        }
        .genie .dynamicIcon > div {
          height: 38px;
          width: 38px;
          display: table-cell;
          vertical-align: bottom;
        }
        .genie .dynamicIcon svg.dynamicSvg,
        .genie .dynamicIcon img {
          height: calc(100% - 42%);
          width: calc(100% - 17%);
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 3px auto;
        }
        .genie .dynamicIcon > div svg {
          height: inherit;
          width: 100%;
          padding-bottom: 5px;
          vertical-align: bottom;
        }
        .genie .dynamicIcon svg.admin_a * {
          stroke: transparent;
        }
        .genie .dynamicIcon .admin_a .st2 {
          fill: #fff !important;
          opacity: 1;
        }
  
        .genie .dynamicIcon svg * {
          stroke: #fff;
        }
        .genie .dynamicIcon svg.healthcare_a * {
          fill: #fff;
          stroke: transparent;
        }
  
        .genie .svgTxt {
          color: #fff;
          opacity: 0.6;
          position: absolute;
          bottom: 26px;
          left: 0;
          right: 0;
          height: 12px;
          width: 57px;
          line-height: normal;
          text-align: center;
          margin: 0 auto;
          font-family: "Montserrat";
          font-size: 0.99em;
          text-transform: uppercase;
        }
        .genie .svgTxt span {
          display: inline-block;
          width: 11px;
          text-align: center;
          padding: 0 5px;
          font-weight: 700;
        }
        .genie .resumeTitle {
          margin-left: 77px;
          margin-top: 5px;
        }
        .genie .name,
        .genie .resumeTitle {
          position: relative;
        }
        .genie .cntcSec {
          background: #404040;
          color: #fff;
          text-align: center;
          padding: 5px 10px;
          word-wrap: break-word;
        }
        .genie .sectiontitle {
          font-family: "Montserrat";
          letter-spacing: 1px;
          font-weight: bold;
          text-transform: uppercase;
          border-top: 1px solid #404040;
          padding-top: 15px;
          padding-bottom: 6px;
          word-wrap: break-word;
          padding-right: 20px;
        }
        .genie .right-box .sectiontitle {
          margin-left: -20px;
          padding-left: 20px;
        }
        .genie .right-box {
          padding-left: 20px;
          padding-top: 15px !important;
          display: table-cell;
          vertical-align: top;
        }
        .genie .left-box .sectiontitle {
          margin-right: -20px;
        }
        .genie .left-box {
          padding-right: 20px;
          padding-top: 15px !important;
          display: table-cell;
          border-right: 1px solid #404040;
        }
        .genie .left-box > .section:first-child .sectiontitle,
        .genie .right-box > .section:first-child .sectiontitle {
          border-top: none;
          padding-top: 0;
        }
        .genie .left-box > .section:first-child,
        .genie .right-box > .section:first-child {
          padding-top: 0 !important;
        }
        .genie .exprSec .singlecolumn .dispBlk:not(:last-child) {
          padding-bottom: 3px;
        }
        .genie .skill .paddedline {
          display: table-cell;
          width: 50%;
        }
        .genie .right-box .skill {
          display: table;
          width: 100%;
          table-layout: fixed;
        }
        .genie .left-box .skill .paddedline {
          display: block;
          width: 100%;
        }
        .genie .right-box .skill .paddedline:last-child li {
          padding-right: 0;
        }
        .genie .social .field a {
          color: #fff;
          text-decoration: underline;
        }
        .genie .social .field a:hover {
          text-decoration: underline;
        }
  
        /*HILT multi para*/
        .genie .multi-para-hilt {
          display: flex;
          flex-wrap: wrap;
        }
        .genie .multi-para-hilt .heading {
          width: 100%;
        }
        .genie .multi-para-content .bottom-space {
          margin-bottom: 2px;
          display: block;
        }
        .genie .right-box .multi-para-hilt .paragraph {
          width: 49%;
          margin-bottom: 10px;
          margin-top: 0;
        }
        .genie .multi-para-hilt .paragraph:last-child,
        .genie
          .right-box
          .multi-para-hilt
          .paragraph:nth-last-child(2):nth-child(2n) {
          margin-bottom: 0;
        }
        .genie .right-box .multi-para-hilt .paragraph:nth-child(2n + 1) {
          margin-left: 2%;
        }
        .genie .right-box .multi-para-hilt .paragraph:nth-child(2n) {
          margin-left: 0;
        }
        .genie .right-box .multi-para-hilt .singlecolumn,
        .genie .multi-para-hilt .singlecolumn {
          margin: 0;
        }
        .genie .multi-section-hilt .multi-para-opt,
        .genie
          .section:not(.multi-para-hilt):not(.multi-section-hilt)
          .multi-para-opt,
        .genie .multi-para-hilt .skill {
          display: none;
        }
  
        /*Finalize page*/
        .genie .left-box > .sortable-item:first-child .sectiontitle,
        .genie .right-box > .sortable-item:first-child .sectiontitle {
          border-top: none;
          padding-top: 0;
        }
        .genie .topsection .sortable-item .doc-overlay {
          background: transparent !important;
        }
        .genie .parentContainer .left-box .sortable-item:first-child .section,
        .genie .parentContainer .right-box .sortable-item:first-child .section {
          padding-top: 0;
        }
        .genie .topsection .sortable-item .nameSec .svgTxt span {
          width: 25px;
        }
  
        /*New logic for infographic*/
        .genie .lang-sec .singlecolumn,
        .genie .skli-sec .singlecolumn,
        .genie .fielditem-olsh {
          display: none;
        }
        .genie .lang-sec.infobarsec .infobarpara,
        .genie .lang-sec.infotilesec .infotilepara,
        .genie .skli-sec.infobarsec .infobarpara,
        .genie .skli-sec.infotilesec .infotilepara,
        .genie .nativeLangPara .fielditem-olsh {
          display: block;
        }
  
        /*Infographic*/
        .genie .lang-sec.infobarsec,
        .genie .skli-sec.infobarsec {
          font-size: 0;
        }
        .genie .lang-sec.infobarsec .field *,
        .genie .lang-sec.infobarsec .nativeLangPara .field,
        .genie .skli-sec.infobarsec .field *,
        .genie .skli-sec.infobarsec .nativeLangPara .field {
          display: inline;
        }
        .genie .lang-sec.infobarsec .paragraph,
        .genie .skli-sec .paragraph {
          display: inline-block;
          vertical-align: top;
          padding-bottom: 5px;
          margin-top: 0;
        }
        .genie .lang-sec.infobarsec .singlecolumn,
        .genie .skli-sec.infobarsec .singlecolumn {
          margin-left: 0 !important;
          padding-left: 0;
          position: relative;
        }
        .genie .right-box .lang-sec.infobarsec .para_odd,
        .genie .right-box .skli-sec.infobarsec .para_odd {
          margin-right: 15px;
        }
        .genie .lang-sec.infobarsec > .paragraph:nth-last-child(1),
        .genie .right-box .lang-sec.infobarsec > .paragraph:nth-last-child(2),
        .genie .skli-sec.infobarsec > .paragraph:nth-last-child(1),
        .genie .right-box .skli-sec.infobarsec > .paragraph:nth-last-child(2) {
          padding-bottom: 0 !important;
        }
        .genie .left-box .lang-sec.infobarsec .nativeLangPara {
          width: 100% !important;
        }
        .genie .right-box .lang-sec.infobarsec .inner-rating,
        .genie .right-box .skli-sec.infobarsec .inner-rating {
          position: relative;
        }
        .genie .lang-sec.infobarsec .rating-bar,
        .genie .skli-sec.infobarsec .rating-bar {
          background: #d5d6d6;
          width: 100%;
          clear: both;
          margin-top: 3px;
          position: relative;
          page-break-inside: avoid;
        }
        .genie .lang-sec.infobarsec .inner-rating,
        .genie .skli-sec.infobarsec .inner-rating {
          background-color: #c6d6e3;
          height: 4px;
          position: relative;
          width: 60%;
        }
        .genie .left-box .lang-sec.infobarsec .paragraph,
        .genie .left-box .skli-sec.infobarsec .paragraph {
          display: block;
          margin-right: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
        }
  
        .genie
          .left-box
          .skli-sec
          .paragraph:last-child
          .singlecolumn
          .field:last-child {
          min-height: 0;
        }
        .genie
          .right-box
          .skli-sec
          .paragraph:nth-last-child(1)
          .singlecolumn
          .field:last-child,
        .genie
          .right-box
          .skli-sec
          .paragraph:nth-last-child(2)
          .singlecolumn
          .field:last-child {
          min-height: 0;
        }
  
        /*Infographic Skills*/
        .genie .lang-sec.infotilesec,
        .genie .skli-sec {
          font-size: 0;
        }
        .genie .lang-sec.infotilesec .paragraph,
        .genie .skli-sec .paragraph {
          display: inline-block;
          vertical-align: top;
          padding-bottom: 5px;
          margin-top: 0;
        }
        .genie .lang-sec.infotilesec > .paragraph:nth-last-child(1),
        .genie .right-box .lang-sec.infotilesec > .paragraph:nth-last-child(2),
        .genie .skli-sec > .paragraph:nth-last-child(1),
        .genie .right-box .skli-sec > .paragraph:nth-last-child(2) {
          padding-bottom: 0 !important;
        }
        .genie .lang-sec.infotilesec .field *,
        .genie .lang-sec.infotilesec .nativeLangPara .field,
        .genie .skli-sec .field * {
          display: inline;
        }
        .genie .lang-sec.infotilesec .singlecolumn,
        .genie .skli-sec .singlecolumn {
          margin-left: 0 !important;
          padding-left: 0;
          position: relative;
        }
        .genie .lang-sec.infotilesec .sliced-rect,
        .genie .skli-sec .sliced-rect {
          height: 6px;
          width: 100%;
          line-height: 0px;
          margin-top: 3px;
          clear: both;
        }
        .genie .right-box .lang-sec.infotilesec .paragraph.para_odd,
        .genie .right-box .skli-sec .paragraph.para_odd {
          margin-right: 15px;
        }
        .genie .left-box .lang-sec.infotilesec .paragraph,
        .genie .left-box .skli-sec .paragraph {
          max-width: 100% !important;
          margin-top: 0;
        }
        .genie .lang-sec.infotilesec .sliced-rect .sliced-rect-tile,
        .genie .skli-sec .sliced-rect .sliced-rect-tile {
          height: 100%;
          background-color: #d5d6d6;
          float: left;
          margin-right: 3px;
        }
        .genie .lang-sec.infotilesec .sliced-rect .sliced-rect-tile:last-child,
        .genie .skli-sec .sliced-rect .sliced-rect-tile:last-child {
          margin-right: 0;
        }
  
        /*Rectangular Rating Blocks*/
        .genie .sliced-rect .sliced-rect-tile.ratvfill {
          background-color: #103f84;
        }
        .genie .hide-bar .rating-bar,
        .genie .hide-only-bar .rating-bar,
        .genie .hide-bar .sliced-rect,
        .genie .hide-colon .colon {
          display: none !important;
        }
        .genie .hide-bar .field-ratt {
          display: none;
        }
        .genie .sliced-rect {
          page-break-inside: avoid;
        } /*Added for PDF fix*/
  
        /*Infographic Languages Ordering Support*/
        .genie .lang-sec.infobarsec .colon,
        .genie .lang-sec.infotilesec .colon {
          display: none;
        }
        .genie .lang-sec.infobarsec .field:first-child .colon,
        .genie .lang-sec.infotilesec .field:first-child .colon {
          display: inline;
          font-weight: bold;
        }
        .genie .lang-sec.infobarsec .field:first-child > span:first-child,
        .genie .lang-sec.infotilesec .field:first-child > span:first-child {
          font-weight: bold;
        }
  
        /*For Extra Space Before Colon*/
        .genie .beforecolonspace {
          display: none !important;
        }
        .genie.show-colon-space .beforecolonspace {
          display: inline !important;
        }
  
        /*Infographic left box*/
        .genie .left-box .rating-bar:before {
          content: "";
          position: absolute;
          height: 4px;
          width: 100%;
          left: 0;
          top: 0;
        }
        .genie .left-box .lang-sec .paragraph,
        .genie .left-box .skli-sec .paragraph {
          display: block;
          margin-right: 0 !important;
        }
  
        /*HILT multi para - For PDF*/
        .genie.for-pdf .multi-para-hilt {
          display: block;
        }
        .genie.for-pdf .right-box .multi-para-hilt .pdfparawrapper:after {
          content: "";
          clear: both;
          display: table;
        }
        .genie.for-pdf
          .right-box
          .multi-para-hilt
          .pdfparawrapper
          .paragraph:first-child {
          float: left;
          margin-left: 0;
        }
        .genie.for-pdf
          .right-box
          .multi-para-hilt
          .pdfparawrapper
          .paragraph:nth-child(2) {
          float: right;
          margin-left: 2%;
        }
        .genie.for-pdf .right-box .multi-para-hilt .pdfparawrapper .paragraph {
          margin-bottom: 10px;
        }
        .genie.for-pdf
          .multi-para-hilt
          .pdfparawrapper:last-child
          .paragraph:last-child,
        .genie.for-pdf
          .right-box
          .multi-para-hilt
          .pdfparawrapper:last-child
          .paragraph {
          margin-bottom: 0;
        }
        .genie,
        .genie table {
          line-height: 12px;
        }
        .genie.pagesize {
          width: "100%";
        }
        .genie.fontsize,
        .genie .lang-sec.infobarsec .paragraph *,
        .genie .lang-sec.infotilesec .paragraph *,
        .genie .skli-sec .paragraph * {
          font-size: 10px;
        }
        .genie.fontface {
          font-family: Source Sans Pro;
        }
        .genie.hmargins {
          padding-left: 18px;
          padding-right: 18px;
        }
        .genie.vmargins {
          padding-top: 18px;
          padding-bottom: 18px;
        }
        .genie .name {
          font-size: 20px;
          line-height: 24px;
        }
        .genie .resumeTitle {
          font-size: 12px;
          line-height: 14px;
        }
        .genie .parentContainer .section {
          padding-top: 15px;
        }
        .genie .sectiontitle {
          font-size: 14px;
          line-height: 17px;
          padding-top: 15px;
          border-width: 1px;
        }
        .genie .paragraph {
          margin-top: 10px;
        }
        .genie .firstparagraph {
          margin-top: 0 !important;
        }
        .genie .right-box .singlecolumn {
          margin-left: 0px;
        }
        .genie .address {
          font-size: 10px;
          line-height: 12px;
        }
        .genie .address li {
          max-width: 509px;
        }
        .genie .left-box {
          border-width: 1px;
          width: 160px;
        }
        .genie .nameSec:before,
        .genie .monogram {
          background: #103f84;
        }
        .genie .pathIn {
          fill: #103f84;
        }
  
        /*HILT multi para*/
        .genie .right-box .multi-para-hilt .heading {
          width: calc(100% + 0px);
          margin-left: -0px;
        }
        .genie .right-box .multi-para-hilt {
          margin-left: 0px;
        }
  
        /*Infographic Bar*/
        .genie .lang-sec.infobarsec .inner-rating,
        .genie .skli-sec.infobarsec .inner-rating {
          background-color: #103f84;
        }
        .genie .right-box .lang-sec.infobarsec {
          padding-left: 0px;
        }
        .genie .right-box .lang-sec.infobarsec .heading {
          margin-left: -0px;
        }
        .genie .lang-sec.infobarsec .paragraph {
          width: 170px;
          max-width: 170px;
        }
        .genie .lang-sec.infobarsec .nativeLangPara {
          width: 359px;
          max-width: 359px;
        }
        .genie .skli-sec .singlecolumn .field:last-child {
          min-height: 13px;
        }
  
        /*Infographic Tile*/
        .genie .right-box .lang-sec.infotilesec,
        .genie .right-box .skli-sec {
          padding-left: 0px;
        }
        .genie .right-box .lang-sec.infotilesec .heading,
        .genie .right-box .skli-sec .heading {
          margin-left: -0px;
        }
        .genie .lang-sec.infotilesec .paragraph,
        .genie .right-box .skli-sec .paragraph {
          width: 170px;
        }
        .genie .left-box .lang-sec.infotilesec .paragraph,
        .genie .left-box .skli-sec .paragraph {
          padding-bottom: 5px;
        }
        .genie .lang-sec.infotilesec .nativeLangPara {
          width: 359px;
          max-width: 359px;
        }
  
        /*Fixes for builder for skill*/
        .genie
          .skli-sec
          .sortable-item
          .paragraph:last-child
          .singlecolumn
          .field:last-child {
          min-height: 13px;
        }
        .genie
          .right-box
          .skli-sec
          .sortable-item:nth-last-child(1)
          .paragraph
          .singlecolumn
          .field:last-child,
        .genie
          .right-box
          .skli-sec
          .sortable-item:nth-last-child(2)
          .paragraph
          .singlecolumn
          .field:last-child {
          min-height: 0;
        }
        .genie
          .lang-sec
          .sortableInner
          > .sortable-item:nth-last-child(1)
          .paragraph,
        .genie
          .right-box
          .lang-sec
          .sortableInner
          > .sortable-item:nth-last-child(2)
          .paragraph,
        .genie
          .right-box
          .skli-sec
          .sortableInner
          > .sortable-item:nth-last-child(1)
          .paragraph,
        .genie
          .right-box
          .skli-sec
          .sortableInner
          > .sortable-item:nth-last-child(2)
          .paragraph {
          padding-bottom: 0 !important;
        }
  
        .genie .fielditem-olsh {
          padding-top: 5px;
          margin-bottom: -3px;
        }
        .genie .left-box .fielditem-olsh {
          padding-top: 5px;
          margin-bottom: -3px;
        }
  
        /*Builder Infographic*/
        .genie .lang-sec .sortable-item .para_odd,
        .genie .lang-sec .sortable-item .para_even,
        .genie
          .left-box
          .lang-sec
          .sortable-item
          .firstparagraph:not(.para_odd):not(.para_even) {
          padding-bottom: 5px;
        }
        .genie .right-box .lang-sec .sortable-item:nth-last-child(1) .paragraph,
        .genie .right-box .lang-sec .sortable-item:nth-last-child(2) .paragraph {
          padding-bottom: 0;
        }
        .genie .right-box .sortable-item .lang-sec .para_odd,
        .genie .right-box .sortable-item .lang-sec .para_even {
          max-width: 180px;
          width: 180px;
        }
        .genie .right-box .lang-sec .sortable-item,
        .genie .right-box .skli-sec .sortable-item {
          display: inline-block !important;
        }
        .genie .left-box .lang-sec .sortable-item .paragraph {
          margin-right: 0 !important;
        }
        .genie .left-box .lang-sec .sortable-item .paragraph {
          padding-bottom: 5px;
        }
        .genie.LUK .right-box .sortable-item .lang-sec .para_odd,
        .genie.LUK .right-box .sortable-item .lang-sec .para_even,
        .genie.LUK .right-box .sortable-item .skli-sec .para_odd,
        .genie.LUK .right-box .sortable-item .skli-sec .para_even {
          max-width: 185px;
          width: 185px;
        }
  
        /* preview fix */
        .resume-preview .genie .right-box .sortable-item .lang-sec .para_odd,
        .resume-preview .genie .right-box .sortable-item .lang-sec .para_even {
          max-width: 180px;
          width: 180px;
        }
  
        /*HILT multi para - For PDF*/
        .genie.for-pdf .left-box .multi-para-hilt .pdfparawrapper .paragraph {
          margin-bottom: 10px;
        }
  
        /*Rectangular Rating Blocks*/
        .genie .paragraph .sliced-rect .sliced-rect-tile.ratvfill {
          background-color: #103f84;
        }
      </style>
    </head>
    <body>
      <section class="page-wrap">
        <div
          class="document doc-root fontsize fontface vmargins hmargins pagesize genie EJS1 
          docskinwidth="559"
        >
          <div id="CONTAINER_PARENT_0" class="topsection">
            <div id="CONTAINER_0">
              <div
                data-react-beautiful-dnd-draggable="248"
                class="sortable-item section-container SortableItem-sibling name-contact"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_NAME9a304921-ae93-4753-95a9-f45bda3f00f5"
                  class="section notdraggable nameSec SECTION_NAME firstsection"
                  data-section-cd="NAME"
                >
                  <div class="doc-item">
                    <div class="">
                      <div class="">
                        <div
                          id="PARAGRAPH_NAME_43670be1-6ffd-fc02-1730-adb1b38a82b1"
                          class="paragraph PARAGRAPH_NAME firstparagraph placeholder-text"
                        >
                          <div>
                            <div class="monogram">
                              <div class="svgTxt">
                                <span id="SUBSTR_FNAM">Y</span>
                                <span id="SUBSTR_LNAM">N</span>
                              </div>
                              <svg width="57px" height="83px" viewBox="0 0 57 83">
                                <g>
                                  <g>
                                    <g>
                                      <path
                                        class="pathIn"
                                        fill="#103F84"
                                        d="M0 0h57v83H0z"
                                      ></path>
                                    </g>
                                    <g>
                                      <g opacity=".6">
                                        <path
                                          fill="none"
                                          stroke="#fff"
                                          stroke-linecap="square"
                                          stroke-miterlimit="20"
                                          stroke-width=".99"
                                          d="M9.667 69.74l37.084-37.083"
                                        ></path>
                                      </g>
                                      <g opacity=".6">
                                        <path
                                          fill="none"
                                          stroke="#fff"
                                          stroke-linecap="square"
                                          stroke-miterlimit="20"
                                          stroke-width=".99"
                                          d="M9.667 32.657l37.084 37.084"
                                        ></path>
                                      </g>
                                      <g
                                        opacity=".6"
                                        transform="rotate(-45 27 33)"
                                      >
                                        <path
                                          fill="#fff"
                                          d="M24.55 28.95l2.319 5.147 5.098 2.27H24.55z"
                                        ></path>
                                      </g>
                                      <g
                                        opacity=".6"
                                        transform="rotate(-225 27.5 70)"
                                      >
                                        <path
                                          fill="#fff"
                                          d="M24.55 65.95l2.319 5.147 5.098 2.27H24.55z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div class="name">
                              <span id="FIELD_FNAM">${
                                personDetail.firstName
                              }</span>
                              <span id="FIELD_LNAM">${
                                personDetail.lastName
                              }</span>
                            </div>
                            <div class="resumeTitle" dependency="DCTL">
                              <span id="FIELD_DCTL" class="placeholder-text"
                                >${jobPosition}</span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266"
                  class="section cntcSec notdraggable SECTION_CNTC"
                  data-section-cd="CNTC"
                >
                  <div class="doc-item">
                    <div class="">
                      <div class="">
                        <div
                          id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc"
                          class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text"
                        >
                          <div class="clearfix doc-item">
                            <div class="address">
                              <ul>
                                <li dependency="ADDR|STRT|CITY|STAT|ZIPC">
                                  <span id="FIELD_STRT"></span>
                                  <span id="FIELD_CITY">${
                                    personDetail.city
                                  }</span
                                  ><span dependency="CITY+STAT">, </span>
                                  <span id="FIELD_STAT">${
                                    personDetail.country
                                  }</span>
                                
                                  <span id="FIELD_ADDR"></span>
                                </li>
                                <li dependency="HPHN">
                                  <span id="FIELD_HPHN">${
                                    personDetail.phone
                                  }</span>
                                </li>
  
                                <li dependency="EMAI">
                                  <span id="FIELD_EMAI"
                                    >${personDetail.email}</span
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="doc-overlay section-overlay"
                  style="left: -2px; right: -2px"
                >
                  <span> </span>
                </div>
              </div>
            </div>
          </div>
          <div id="CONTAINER_PARENT_1" class="parentContainer">
            <div id="CONTAINER_1" class="left-box">
              <div
                data-react-beautiful-dnd-draggable="249"
                class="sortable-item section-container SortableItem-sibling data-SUMM"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7"
                  class="section SECTION_SUMM noparagraph has-title"
                  data-section-cd="SUMM"
                >
                  <div class="doc-item">
                    <div class="heading">
                      <div class="sectiontitle" id="SECTIONNAME_SUMM">
                        Professional Summary<span
                          title=" Professional Summary "
                          class="rename-section text-rename"
                        ></span>
                      </div>
                    </div>
                    <div class="">
                      <div class="">
                        <div
                          id="PARAGRAPH_SUMM_0"
                          class="paragraph PARAGRAPH_SUMM firstparagraph placeholder-text"
                        >
                          <div class="clearfix doc-item">
                            <div class="singlecolumn" id="FIELD_FRFM">
                            ${userSummary}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-react-beautiful-dnd-draggable="249"
                class="sortable-item section-container SortableItem-sibling data-EDUC"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
                  class="section SECTION_EDUC noparagraph multi-para has-title"
                  data-section-cd="EDUC"
                >
                  <div class="doc-item">
                    
                    ${renderEducation()}


                  </div>
                </div>

               ${renderCertificate() ?? []}
               ${renderAwards() ?? []}
               ${renderReferences() ?? []}

              </div>
            </div>
            <div id="CONTAINER_2" class="right-box">
              <div
                data-react-beautiful-dnd-draggable="249"
                class="sortable-item section-container SortableItem-sibling data-HILT"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                <div
                  id="SECTION_HILTa5cb1850-6271-45e8-86ba-3d92fbc82062"
                  class="section SECTION_HILT noparagraph has-title"
                  data-section-cd="HILT"
                 >
                  
                    
                                    ${renderSkills()}
                            
                    <br/>
                
               
                                    ${renderHobbies()}
                              

               
                </div>
              </div>
              <div
                data-react-beautiful-dnd-draggable="249"
                class="sortable-item section-container SortableItem-sibling data-EXPR"
              >
                <div
                  class="document-tool sec-tool"
                  id="editIcons"
                  style="right: -2px"
                ></div>
                
                <div class="doc-item">
                
              
                  ${renderExperience()}

               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
  
  `;
}