export function template36(resume) {
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
        class="section education SECTION_EDUC noparagraph multi-para has-title"
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
                  `<div class="">
           <div class="">
             <div
               id="PARAGRAPH_EDUC_0"
               class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text"
             >
               <div class="clearfix doc-item">
                 <div class="singlecolumn">
                   <span class="paddedline">
                     <span class="educ-date">
                     <span id="FIELD_GRYR" format="%m/%Y"
                     >${element.fromMonth}</span> <span>- </span>
                       <span id="FIELD_GRYR" format="%m/%Y">${element.Year}</span >
                      
                     </span>
                     <span class="educ-inner">
                     
                      <span class="txt-bold" id="FIELD_STUY"
                         >${element.certificate}</span
                       ><span class="txt-bold" id="FIELD_GRHN"></span
                       ><span dependency="DGRE|STUY|GRHN"
                         ><span dependency="SCHO|SCIT|SSTA|GRPA"
                           >,
                         </span></span
                       ><span
                         class="txt-bold txtItl"
                         dependency="SCHO"
                         id="FIELD_SCHO"
                         >${element.institute}</span
                       ><span dependency="SCHO+SCIT|SSTA">, </span
                       >`
              )
              .join("")}
              </div>
             </div>
             </div>
             </div></div> `;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (awards && awards.length > 0) {
      awardsHtml = `
        <div
        id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
        class="section education SECTION_EDUC noparagraph multi-para has-title"
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
                  `<div class="">
           <div class="">
             <div
               id="PARAGRAPH_EDUC_0"
               class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text"
             >
               <div class="clearfix doc-item">
                 <div class="singlecolumn">
                   <span class="paddedline">
                     <span class="educ-date">
                     
                       <span id="FIELD_GRYR" format="%m/%Y">${element.Year}</span >
                      
                     </span>
                     <span class="educ-inner">
                     
                      <span class="txt-bold" id="FIELD_STUY"
                         >${element.awards}</span
                       ><span class="txt-bold" id="FIELD_GRHN"></span
                       ><span dependency="DGRE|STUY|GRHN"
                         ><span dependency="SCHO|SCIT|SSTA|GRPA"
                           >,
                         </span></span
                       ><span
                         class="txt-bold txtItl"
                         dependency="SCHO"
                         id="FIELD_SCHO"
                         >${element.institute}</span
                       ><span dependency="SCHO+SCIT|SSTA">, </span
                       >`
              )
              .join("")}
              </div>
             </div>
             </div>
             </div></div> `;
    }
    return awardsHtml;
  }

  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
        <div
        id="SECTION_EDUC476ef462-3a42-43d6-a629-bf2e3c1ef6ac"
        class="section education SECTION_EDUC noparagraph multi-para has-title"
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
                  `<div class="">
           <div class="">
             <div
               id="PARAGRAPH_EDUC_0"
               class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text"
             >
               <div class="clearfix doc-item">
                 <div class="singlecolumn">
                   <span class="paddedline">
                     <span class="educ-inner">
                     
                      <span class="txt-bold" id="FIELD_STUY"
                         >${element.reference}</span
                       ><span class="txt-bold" id="FIELD_GRHN"></span
                       ><span dependency="DGRE|STUY|GRHN"
                         ><span dependency="SCHO|SCIT|SSTA|GRPA"
                           >,
                         </span></span
                       ><span
                         class="txt-bold txtItl"
                         dependency="SCHO"
                         id="FIELD_SCHO"
                         >${element.institute}</span
                       ><span dependency="SCHO+SCIT|SSTA">, </span
                       >`
              )
              .join("")}
              </div>
             </div>
             </div>
             </div> `;
    }
    return referencesHtml;
  }

  function renderSkills() {
    let skillsHtml = "";
    if (skills && skills.length > 0) {
      skillsHtml = `
        <div class="heading">
          <div class="sectiontitle" id="SECTIONNAME_EDUC">Skills</div>
        </div>
        <div class="clearfix doc-item">
          <div class="singlecolumn">
            ${skills
              .map((element) => `<span class="skill">${element.name}</span>`)
              .join(", ")}
          </div>
        </div>
      `;
    }
    return skillsHtml;
  }

  function renderHobbies() {
    let hobbyHtml = "";
    if (hobbies && hobbies.length > 0) {
      hobbyHtml = `
        <div class="heading">
          <div class="sectiontitle" id="SECTIONNAME_EDUC">Hobbies</div>
        </div>
        <div class="clearfix doc-item">
          <div class="singlecolumn">
            ${hobbies
              .map((element) => `<span class="skill">${element.name}</span>`)
              .join(", ")}
          </div>
        </div>
      `;
    }
    return hobbyHtml;
  }

  function renderExperience() {
    var result = "";
    if (experience && experience.length > 0) {
      result += `
      <div data-react-beautiful-dnd-draggable="229" class="sortable-item section-container SortableItem-sibling data-EXPR">
      <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
      <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
      <div class="heading">
        <div class="sectiontitle" id="SECTIONNAME_EXPR">
          Work History
        </div>
      </div>`;
      experience.forEach((element) => {
        result += `<div class="">
        <div class="sortableInner">
          <div id="PARAGRAPH_EXPR_0" class="paragraph PARAGRAPH_EXPR firstparagraph placeholder-text">
            <div class="clearfix doc-item">
              <div class="singlecolumn">
                <span class="paddedline">
                  <span class="paddedline">
                    <span id="FIELD_JSTD" format="%m/%Y">${
                      element.fromYear
                    }${cleanMonth(element.fromMonth)}</span>
                    <span dependency="JSTD+EDDT"> - </span>
                    <span id="FIELD_EDDT" format="%m/%Y">${
                      element.toYear
                    }${cleanMonth(element.toMonth)}</span>
                  </span>
                  <span class="txt-bold paddedline" id="FIELD_JTIT">${
                    element.position
                  }</span>
                  <span class="txt-bold txtItl" id="FIELD_COMP">${
                    element.company
                  }</span>
                  <span dependency="COMP">
                    <span dependency="JCIT|JSTA|JCNT|JLOC">,</span>
                  </span>
                  <span class="txt-bold" id="FIELD_JCIT">${
                    element?.city ?? ""
                  }</span>
                  <span class="txt-bold" id="FIELD_JLOC"></span>
                </span>
                <span class="jobline" id="FIELD_JDES">
                  <ul>`;

        var roles = "";
        (element?.roles ?? []).forEach((role) => {
          roles += `<li>${role}</li>`;
        });
        result += `${roles}</ul></span>
              </div>
            </div>
          </div>
          <div id="PARAGRAPH_EXPR_-2" class="paragraph PARAGRAPH_EXPR placeholder-text">
            <div class="clearfix doc-item">
              <div class="singlecolumn">
                <span class="paddedline">
                  <span class="paddedline">
                    <span id="FIELD_JSTD" format="%m/%Y"></span>
                    <span id="FIELD_EDDT" format="%m/%Y"></span>
                  </span>
                  <span class="txt-bold paddedline" id="FIELD_JTIT"></span>
                  <span class="txt-bold txtItl" id="FIELD_COMP"></span>
                  <span class="txt-bold" id="FIELD_JCIT"></span>
                  <span class="txt-bold" id="FIELD_JSTA"></span>
                  <span class="txt-bold" id="FIELD_JCNT"></span>
                  <span class="txt-bold" id="FIELD_JLOC"></span>
                </span>
                <span class="jobline" id="FIELD_JDES"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div/>
      <div/>
      <br/>`;
      });
    }
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education && education.length > 0) {
      result += `
      <div data-react-beautiful-dnd-draggable="229" class="sortable-item section-container SortableItem-sibling data-EXPR">
      <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
      <div id="SECTION_EXPR323074c2-b189-4f8d-8af7-fc51cdc40434" class="section SECTION_EXPR noparagraph multi-para has-title" data-section-cd="EXPR">
        <div class="heading">
          <div class="sectiontitle" id="SECTIONNAME_EDUC">
            Education
          </div>
        </div>`;
      education.forEach((element) => {
        result += `<div class="">
            <div class="">
              <div id="PARAGRAPH_EDUC_0" class="paragraph PARAGRAPH_EDUC firstparagraph placeholder-text">
                <div class="clearfix doc-item">
                  <div class="singlecolumn">
                    <span class="paddedline">
                      <span class="educ-date">
                        <span class="xslt_static_change displayNoneThisField">Expected in</span>
                        <span id="FIELD_GRYR" format="%m/%Y">${
                          element.fromYear
                        }</span> 
                        <span id="FIELD_GRYR" format="%m/%Y">${
                          element.toYear
                        }</span>
                        <span id="FIELD_GRIP"></span>
                      </span>
                      <span class="educ-inner">
                        <span class="txt-bold" id="FIELD_STUY">${
                          element.degree
                        }</span>
                        <span class="txt-bold" id="FIELD_GRHN"></span>
                        <span dependency="DGRE|STUY|GRHN"><span dependency="SCHO|SCIT|SSTA|GRPA">,</span></span>
                        <span class="txt-bold txtItl" dependency="SCHO" id="FIELD_SCHO">${
                          element.university
                        }</span>
                        <span dependency="SCHO+SCIT|SSTA">, </span>
                        <span id="FIELD_SCIT">${element?.city ?? ""}</span>
                        <span class="field jobline" id="FIELD_FRFM"></span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div/>
          <div/>
          <br/>`;
      });
    }
    return result;
  }

  return `<!DOCTYPE html>
  <html>
  <head>
  
    <style>


    @page {
      margin: 0px;
    }
          body {
            margin: auto;
          }
          @import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700");
  
          body {
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
  
          /* START content disc style for LI */
          .genie ul,
          .genie li {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          .genie ul li {
            position: relative;
            margin: 0px;
            padding-left: 11px;
            margin-top: 5px;
          }
          .genie ul li:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
          }
          .genie ul li:first-child {
            margin-top: 0;
          }
          /* END content disc style for LI */
  
          .genie .paddedline {
            display: block;
          }
          .genie .jobline ul {
            margin-top: 5px;
          }
          .genie .txt-bold {
            font-weight: bold;
          }
          .genie .txtItl {
            font-style: italic;
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
  
          /*Document*/
          .genie {
            color: #000;
            font-variant-ligatures: none;
            word-wrap: break-word;
            font-weight: 400;
            min-height: 792px;
          }
          .genie .name {
            font-weight: bold;
            padding: 0;
            position: relative;
          }
          .genie .pro-title {
            font-weight: 400;
            text-transform: uppercase;
          }
  
          /* CNTC */
          .genie .section.cntc-sec {
            margin-top: 15px !important;
          }
          .genie .top-section,
          .genie .parentContainer {
            display: table;
            table-layout: fixed;
            width: 100%;
          }
          .genie .top-section .right-box .cntc-sec.section:before {
            height: 5px;
            top: -10px;
          }
          .genie .address {
            text-align: left;
          }
          .genie .address .adrs-field {
            margin-bottom: 5px;
          }
          .genie .address .details-left .adrs-field:last-child,
          .genie .address .details-right .adrs-field:last-child {
            margin-bottom: 0;
          }
          .genie .address .details-left {
            width: 46.5%;
            margin-right: 7%;
            float: left;
            height: auto;
          }
          .genie .address .details-right {
            width: 46.5%;
            float: left;
            height: auto;
          }
          .genie .social .field a {
            color: #0000ee;
            text-decoration: underline;
          }
          .genie .social .field a:hover {
            text-decoration: underline;
          }
  
          /* Heading */
          .genie .heading {
            font-weight: bold;
            font-size: 18px;
            position: relative;
            float: left;
            text-align: right;
            text-transform: capitalize;
          }
          .genie .sectiontitle {
            letter-spacing: 0.3px;
          }
  
          /* Common style for left and right box */
          .genie .left-box {
            display: table-cell;
            position: relative;
            overflow: hidden;
          }
          .genie .right-box {
            display: table-cell;
            vertical-align: middle;
            position: relative;
            width: 100%;
          }
          .genie .top-section .right-box {
            padding-left: 20px;
          }
          .genie .pict-sec {
            text-align: right;
          }
          .genie .pict-sec img {
            width: 72px;
            height: 90px;
            border: 1px solid #000;
          }
          .genie .section {
            position: relative;
            padding-top: 5px;
          }
          .genie .section:after {
            content: "";
            clear: both;
            display: table;
          }
          .genie .section:before {
            content: "";
            position: absolute;
            width: calc(100% - 130px);
            height: 1px;
            left: 130px;
            top: 0px;
            background: linear-gradient(to right, #d0021b 53.5%, #000 46.5%);
          }
          .genie .top-section .right-box .section:before {
            left: 0;
            width: 100%;
          }
          .genie .top-section .section.name-sec:before {
            display: none;
          }
          .genie .top-section .name-sec,
          .genie .pict-sec {
            margin-top: 0 !important;
          }
          .genie .parentContainer .section:first-child {
            margin-top: 40px !important;
          }
          .genie .educ-date,
          .genie .educ-inner {
            display: table-cell;
          }
          .genie .educ-date {
            width: 40px;
            text-align: right;
            margin-right: 10px;
          }
          .genie .educ-inner {
            padding-left: 10px;
          }
          .genie .hilt-sec .paddedline {
            margin-bottom: 5px;
            display: table-cell;
            width: 50%;
          }
          .genie .hilt-sec .paddedline:first-child {
            padding-right: 25px;
          }
          .genie .hilt-sec ul li {
            padding-left: 0;
          }
          .genie .hilt-sec ul li:before {
            display: none;
          }
          .genie .hilt-sec .singlecolumn {
            display: table;
            table-layout: fixed;
          }
  
          /*New logic for infographic*/
          .genie .lang-sec .singlecolumn,
          .genie .skli-sec .singlecolumn {
            display: none;
          }
          .genie .lang-sec.infobarsec .infobarpara,
          .genie .lang-sec.infotilesec .infotilepara,
          .genie .skli-sec.infobarsec .infobarpara,
          .genie .skli-sec.infotilesec .infotilepara {
            display: block;
          }
  
          /*Infographic*/
          .genie .lang-sec.infobarsec,
          .genie .skli-sec.infobarsec {
            font-size: 0;
          }
          .genie .lang-sec.infobarsec .field *,
          .genie .skli-sec.infobarsec .field *,
          .genie .lang-sec.infobarsec .nativeLangPara .field {
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
          .genie .skli-sec .singlecolumn {
            margin-left: 0 !important;
            padding-left: 0;
            position: relative;
          }
          .genie .lang-sec.infobarsec .para_odd,
          .genie .skli-sec .para_odd {
            margin-right: 15px;
          }
          .genie .lang-sec.infobarsec .nativeLangPara {
            width: 100% !important;
          }
          .genie .lang-sec.infobarsec .inner-rating,
          .genie .skli-sec.infobarsec .inner-rating {
            position: relative;
          }
          .genie .lang-sec.infobarsec .rating-bar,
          .genie .skli-sec.infobarsec .rating-bar {
            background: #d5d6d6;
            width: 100%;
            clear: both;
            margin-top: 3px;
          }
          .genie .lang-sec.infobarsec .inner-rating,
          .genie .skli-sec.infobarsec .inner-rating {
            background-color: #576d7b;
            height: 4px;
            width: 60%;
          }
          .genie .lang-sec.infobarsec .paragraph:before,
          .genie .skli-sec.infobarsec .paragraph:before {
            display: none;
          }
          .genie .lang-sec.infobarsec > .paragraph:nth-last-child(1),
          .genie .lang-sec.infobarsec > .paragraph:nth-last-child(2),
          .genie .skli-sec.infobarsec > .paragraph:nth-last-child(1),
          .genie .skli-sec.infobarsec > .paragraph:nth-last-child(2) {
            padding-bottom: 0 !important;
          }
  
          .genie .skli-sec .paragraph:last-child .singlecolumn .field:last-child {
            min-height: 0;
          }
          .genie
            .skli-sec
            .paragraph:nth-last-child(1)
            .singlecolumn
            .field:last-child,
          .genie
            .skli-sec
            .paragraph:nth-last-child(2)
            .singlecolumn
            .field:last-child {
            min-height: 0;
          }
  
          /*Infographic Tiles*/
          .genie .lang-sec.infotilesec,
          .genie .skli-sec {
            font-size: 0;
          }
          .genie .lang-sec.infotilesec .paragraph,
          .genie .skli-sec .paragraph {
            display: inline-block;
            vertical-align: top;
            padding-bottom: 5px !important;
            margin-top: 0;
          }
          .genie .lang-sec.infotilesec > .paragraph:nth-last-child(1),
          .genie .lang-sec.infotilesec > .paragraph:nth-last-child(2),
          .genie .skli-sec > .paragraph:nth-last-child(1),
          .genie .skli-sec > .paragraph:nth-last-child(2) {
            padding-bottom: 0 !important;
          }
          .genie .lang-sec.infotilesec .field *,
          .genie .skli-sec .field *,
          .genie .lang-sec.infotilesec .nativeLangPara .field {
            display: inline;
          }
          .genie .lang-sec.infotilesec .singlecolumn,
          .genie .skli-sec .singlecolumn {
            margin-left: 0 !important;
          }
          .genie .lang-sec.infotilesec .sliced-rect,
          .genie .skli-sec .sliced-rect {
            height: 6px;
            width: 100%;
            margin-top: 3px;
            line-height: 0px;
            clear: both;
          }
          .genie .lang-sec.infotilesec .paragraph.para_odd,
          .genie .skli-sec .paragraph.para_odd {
            margin-right: 15px;
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
            background-color: #576d7b;
          }
          .genie .hide-bar .rating-bar,
          .genie .hide-only-bar .rating-bar,
          .genie .hide-bar .sliced-rect,
          .genie .hide-colon .colon {
            display: none !important;
          }
  
          /*MPR*/
          .genie .hide-bar .field-ratt {
            display: none;
          }
  
          /*HILT multi para/section*/
          .genie .multi-para-hilt {
            position: relative;
          }
          .genie .multi-para-hilt:after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            line-height: 0;
            height: 0;
          } /*Clearfix*/
          .genie .multi-para-hilt .paragraph {
            margin-bottom: 10px;
            margin-top: 0;
            width: 49%;
            float: left;
          }
          .genie .multi-para-hilt .paragraph:last-child,
          .genie .multi-para-hilt .paragraph:nth-last-child(2):nth-child(2n) {
            margin-bottom: 0;
          }
          .genie .multi-para-hilt .paragraph:nth-child(2n + 1) {
            margin-left: 2%;
          }
          .genie .multi-para-hilt .paragraph:nth-child(2n) {
            clear: left;
          }
          .genie .multi-para-hilt .singlecolumn {
            width: 100% !important;
            margin-left: 0 !important;
          }
          .genie .multi-para-hilt .heading {
            position: absolute;
            left: 0;
          }
          .genie .multi-section-hilt .multi-para-opt,
          .genie
            .section:not(.multi-para-hilt):not(.multi-section-hilt)
            .multi-para-opt,
          .genie .multi-para-hilt .skill {
            display: none;
          }
          .genie .multi-para-hilt ul li:first-child {
            margin-top: 5px;
          }
  
          /*HILT multi para - For PDF*/
          .genie.for-pdf .multi-para-hilt {
            display: block;
          }
          .genie.for-pdf .multi-para-hilt .pdfparawrapper:after {
            content: "";
            clear: both;
            display: table;
          }
          .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph:first-child {
            float: left;
            margin-left: 0;
          }
          .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph:nth-child(2) {
            float: right;
            margin-left: 2%;
          }
          .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph {
            margin-bottom: 10px;
          }
          .genie.for-pdf .multi-para-hilt .pdfparawrapper .paragraph:nth-child(2n) {
            clear: none;
          }
          .genie.for-pdf .multi-para-hilt .pdfparawrapper:last-child .paragraph {
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
            font-family: Lato;
          }
          .genie.hmargins {
            padding-left: 40px;
            padding-right: 40px;
          }
          .genie.vmargins {
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .genie .section {
            margin-top: 30px;
          }
          .genie .firstparagraph {
            margin-top: 0 !important;
          }
          .genie .paragraph {
            margin-top: 15px;
          }
          .genie .educ-date {
            font-size: 9px;
          }
          .genie .education .paragraph {
            margin-top: 5px;
          }
          .genie .parentContainer .singlecolumn {
            margin-left: 130px;
          }
          .genie table.skills td {
            padding-top: 7px;
          }
          .genie .name {
            font-size: 24px;
            line-height: 27px;
          }
          .genie .pro-title {
            margin-top: 5px;
          }
          .genie .address2 {
            font-size: 10px;
          }
          .genie .heading {
            width: 110px;
          }
          .genie .sectiontitle {
            width: 110px;
            font-size: 12px;
            line-height: 15px;
          }
          .genie .left-box,
          .genie .left-box .firstparagraph {
            width: 110px;
          }
          .genie .right-box .section:before,
          .genie .section:before {
            background: linear-gradient(to right, #576d7b 53.5%, #000 46.5%);
          }
          .genie .hilt-sec .singlecolumn {
            width: calc(100% - 130px);
          }
          .genie .section:before {
            height: 1px;
          }
  
          /*Infographic*/
          .genie .lang-sec.infobarsec {
            padding-left: 130px;
          }
          .genie .lang-sec.infobarsec .heading {
            margin-left: -130px;
          }
          .genie .lang-sec.infobarsec .paragraph {
            width: 182px;
            max-width: 182px;
          }
          .genie .lang-sec.infobarsec .inner-rating,
          .genie .skli-sec.infobarsec .inner-rating {
            background-color: #576d7b;
          }
          .genie .lang-sec.infobarsec .nativeLangPara {
            width: 415px;
            max-width: 415px;
          }
  
          .genie .skli-sec .singlecolumn .field:last-child {
            min-height: 12px;
          }
  
          /*Infographic Skills*/
          .genie .lang-sec.infotilesec,
          .genie .skli-sec {
            padding-left: 130px;
          }
          .genie .lang-sec.infotilesec .heading,
          .genie .skli-sec .heading {
            margin-left: -130px;
          }
          .genie .lang-sec.infotilesec .paragraph,
          .genie .skli-sec .paragraph {
            width: 182px;
          }
          .genie .lang-sec.infotilesec .nativeLangPara {
            width: 415px;
            max-width: 415px;
          }
  
          /*Builder fixes*/
          .genie .lang-sec.infotilesec .nativeLangPara {
            width: 100%;
          }
          .genie .lang-sec .title-edit,
          .genie .skli-sec .title-edit {
            margin-left: -130px;
          }
  
          /*Fixes for builder for skill*/
          .genie
            .skli-sec
            .sortable-item
            .paragraph:last-child
            .singlecolumn
            .field:last-child {
            min-height: 12px;
          }
          .genie
            .skli-sec
            .sortable-item:nth-last-child(1)
            .paragraph
            .singlecolumn
            .field:last-child,
          .genie
            .skli-sec
            .sortable-item:nth-last-child(2)
            .paragraph
            .singlecolumn
            .field:last-child {
            min-height: 0;
          }
          .genie
            .skli-sec
            .sortableInner
            > .sortable-item:nth-last-child(1)
            .paragraph,
          .genie
            .skli-sec
            .sortableInner
            > .sortable-item:nth-last-child(2)
            .paragraph {
            padding-bottom: 0 !important;
          }
          .genie .data-SKLI .paragraph-container {
            display: inline-block;
          }
          .genie .skli-sec .sortableInner {
            margin-left: 0;
          }
  
          /*Rectangular Rating Blocks*/
          .genie .paragraph .sliced-rect .sliced-rect-tile.ratvfill {
            background-color: #576d7b;
          }
  
          /*LUK Builder fixes*/
          .genie.LUK .section:before {
            width: calc(100% - 160px);
            left: 160px;
          }
          .page-finalize .genie .lang-sec .sortable-item {
            display: inline;
          }
  
          /*HILT multi para*/
          .genie .multi-para-hilt {
            padding-left: 130px;
          }.jobTitle{
            font-size: 16px;
          }

    </style>
    <title></title>
  </head>
  <body>
    <section class="page-wrap">
      <div id="document" class="document doc-root fontsize fontface vmargins hmargins pagesize genie MNS6 docskinwidth=">
        <div id="CONTAINER_PARENT_0" class="top-section">
          <div id="CONTAINER_0" class="left-box"></div>
          <div id="CONTAINER_1" class="right-box">
            <div data-react-beautiful-dnd-draggable="228" class="sortable-item section-container SortableItem-sibling name-contact">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_NAME9a304921-ae93-4753-95a9-f45bda3f00f5" class="section notdraggable name-sec SECTION_NAME firstsection" data-section-cd="NAME">
                <div class="doc-item">
                  <div class="">
                    <div class="">
                      <div id="PARAGRAPH_NAME_43670be1-6ffd-fc02-1730-adb1b38a82b1" class="paragraph PARAGRAPH_NAME firstparagraph placeholder-text">
                        <div>
                          <div class="name">
                            <span class="field" id="FIELD_FNAM">${
                              personDetail.firstName
                            }</span> <span class="field" id="FIELD_LNAM">${
    personDetail.lastName
  }</span>
                          </div>
                          <div class="pro-title" dependency="DCTL">
                            <span id="FIELD_DCTL" class="jobTitle">${jobPosition}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SECTION_CNTC2f838e9f-8d2a-4bc1-b1cd-998c15e31266" class="section notdraggable cntc-sec SECTION_CNTC" data-section-cd="CNTC">
                <div class="doc-item">
                  <div class="">
                    <div class="">
                      <div id="PARAGRAPH_CNTC_379be96f-a033-c17d-b4e4-d348b79faafc" class="paragraph PARAGRAPH_CNTC firstparagraph placeholder-text">
                        <div class="clearfix doc-item">
                          <div class="address">
                            <div class="details-left">
                              <div class="adrs-field" dependency="EMAI">
                                <span class="field" id="FIELD_EMAI">${
                                  personDetail.email
                                }</span>
                              </div>
                              <div class="adrs-field" dependency="HPHN">
                                <span class="field" id="FIELD_HPHN">${
                                  personDetail.phone
                                }</span>
                              </div>
                            </div>
                            <div class="details-right">
                              <div class="adrs-field" dependency="ADDR|STRT|CITY|STAT|ZIPC">
                                <span class="field" id="FIELD_STRT"></span> <span class="field" id="FIELD_CITY">${
                                  personDetail.city
                                }</span><span dependency="CITY+STAT">,</span> <span class="field" id="FIELD_STAT">${
    personDetail.country
  }</span> <span class="field" id="FIELD_ADDR"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="doc-overlay section-overlay" style="left: -2px; right: -2px"></div>
            </div>
          </div>
        </div>
        <div id="CONTAINER_PARENT_1" class="parentContainer">
          <div id="CONTAINER_2" class="right-box">
            <div data-react-beautiful-dnd-draggable="229" class="sortable-item section-container SortableItem-sibling data-SUMM">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_SUMM4800037c-cd8f-4921-be95-3c3932c1a2a7" class="section SECTION_SUMM noparagraph has-title" data-section-cd="SUMM">
                <div class="doc-item">
                  <div class="heading">
                    <div class="sectiontitle" id="SECTIONNAME_SUMM">
                      Professional Summary
                    </div>
                  </div>
                  <div class="">
                    <div class="">
                      <div id="PARAGRAPH_SUMM_0" class="paragraph PARAGRAPH_SUMM firstparagraph placeholder-text">
                        <div class="clearfix doc-item">
                          <div class="field singlecolumn" id="FIELD_FRFM">
                            ${userSummary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-react-beautiful-dnd-draggable="229" class="sortable-item section-container SortableItem-sibling data-HILT">
              <div class="document-tool sec-tool" id="editIcons" style="right: -2px"></div>
              <div id="SECTION_HILTa5cb1850-6271-45e8-86ba-3d92fbc82062" class="section hilt-sec SECTION_HILT noparagraph has-title" data-section-cd="HILT">
                <div class="doc-item">
                  
                  <div class="">
                    
                              ${renderSkills()}
                            
                              <br/>
                 
                              ${renderHobbies()}
                          
                  </div>
                </div>
              </div>
            </div>
           
                <div class="doc-item">
                  ${renderExperience()}
                </div>
             
           
                <div class="doc-item">
                  ${renderEducation()}
                </div>
            
              ${renderCertificate() ?? []} ${renderAwards() ?? []} ${
    renderReferences() ?? []
  }
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  </html>
   `;
}