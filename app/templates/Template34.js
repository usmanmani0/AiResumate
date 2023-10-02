export function template34(resume) {
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
  const award = awardsDetail;
  const references = referenceDetail;

  function cleanMonth(month) {
    return month == 0 ? "" : "-" + month.toString().padStart(2, "0");
  }

  function renderCertificate() {
    let certificateHtml = "";
    if (certificates && certificates.length > 0) {
      certificateHtml = `
          <div class="title">
            <i class="fa fa-briefcase" aria-hidden="true"></i>
              <h2>CERTIFICATE</h2>
              ${certificates
                .map(
                  (element) =>
                    ` <div class="item">
                <h3>${element.certificate} @ ${element.institute} <br/>
                
                <span>${element.Year}${cleanMonth(
                      element.fromMonth
                    )}</span> </h3>
                
                </div>`
                )
                .join("")}
          </div>`;
    }
    return certificateHtml;
  }

  function renderAwards() {
    let awardsHtml = "";
    if (award && award.length > 0) {
      awardsHtml = `
        <div class="title">
          <i class="fa fa-briefcase" aria-hidden="true"></i>
          <h2>AWARDS</h2>
        </div>
        ${award
          .map(
            (element) =>
              `<div class="item">
                <h3>${element.awards} @ ${element.institute} <br/>
                <span>${element.Year}</span>
              </h3>
            </div>`
          )
          .join("")}
      `;
    }
    return awardsHtml;
  }
  function renderReferences() {
    let referencesHtml = "";
    if (references && references.length > 0) {
      referencesHtml = `
          <div class="title">
          <i class="fa fa-briefcase" aria-hidden="true"></i>
          <h2>REFERENCE</h2>
              ${references
                .map(
                  (element) =>
                    ` <div class="item">
                <h3>${element.reference} @ ${element.institute} <br/>
  
                </div>`
                )
                .join("")}
                </div>`;
    }
    return referencesHtml;
  }

  function renderSkills() {
    var result = "";
    skills.forEach((element) => {
      if (result == "") {
        result = `${element.name}`;
      }
      result = result + ", " + `${element.name}`;
    });
    return result;
  }

  function renderHobbies() {
    var result = "";
    hobbies.forEach((element) => {
      if (result == "") {
        result = `${element.name}`;
      }
      result = result + ", " + `${element.name}`;
    });
    return result;
  }

  function renderExperience() {
    var result = "";
    if (experience.length > 0) {
      result += `
        <div class="title">
          <h2>EXPERIENCE</h2>
        </div>
      `;
    }
    experience.forEach((element) => {
      result += `
        <div class="item">
          <h3>${element.position} @ ${element.company} <br/>
            <span>${element?.city ?? []}</span> <br/>
            <span>${element.fromYear}${cleanMonth(element.fromMonth)} - ${
        element.toMonth
      } / ${element.toYear}</span>
          </h3>
      `;

      var roles = "";
      (element?.roles ?? []).forEach((role) => {
        roles += `<p>${role}</p>`;
      });
      result += `${roles}
        </div>`;
    });
    return result;
  }

  function renderEducation() {
    var result = "";
    if (education.length > 0) {
      result += `
        <div class="title">
          <h2>EDUCATION</h2>
        </div>
      `;
    }
    education.forEach((element) => {
      result += `
        <div class="item">
          <h3>${element.degree} @ ${element.university} <br/>
            <span>${element.city ?? []}</span> <br/>
            <span>${element.fromYear}${cleanMonth(element.fromMonth)} - ${
        element.toMonth
      } / ${element.toYear}</span>
          </h3>
        </div>
      `;
    });

    return result;
  }
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <meta name="HandheldFriendly" content="true">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Free HTML Professional Resume CV Template</title>
      <link rel="stylesheet" href="assets/css/style.css">
      <script src="https://use.fontawesome.com/809c2bfca6.js"></script>
      <style>
  
      @page {
        margin: 0px;
      }
  
      @import url("https://fonts.googleapis.com/css?family=Raleway:300,400,700");
      body{
      
        margin:0;padding:0;font-family:'Raleway',sans-serif}header .wrapper{margin:0;padding:0;max-width:100%;position:relative;}header .wrapper .content-wrapper{float:right;width:100%}.sidebar{-webkit-box-shadow:4px 0 5px -2px rgba(94,94,94,0.81);box-shadow:4px 0 5px -2px rgba(94,94,94,0.81);text-align:center;position:fixed;width:420px;margin-right:-320px;float:left;color:#fff !important;height:100%;background-image:-webkit-linear-gradient(bottom,   #A81A2B 0%,  #800080 100%);background-image:-moz-linear-gradient(bottom,   #A81A2B 0%,  #800080 100%);background-image:-o-linear-gradient(bottom,   #A81A2B 0%,  #800080 100%);background-image:-ms-linear-gradient(bottom,   #A81A2B 0%,  #800080 100%);background-image:linear-gradient(to top,   #A81A2B 0%,  #800080 100%);}.sidebar .bio{position:absolute;top:25%;left:5%;width:90%;display:block;margin:0 auto;}.sidebar .bio .title h1{font-weight:700;margin-bottom:0;text-transform:uppercase;font-size:28px}.sidebar .bio .title h2{font-size:20px;margin:0 0 30px 0;font-weight:300;letter-spacing:1.6px}.sidebar .bio .avatar img{width:140px;border-radius:50%;border:1px solid rgba(255,255,255,0.2);-webkit-box-shadow:0 0 20px rgba(255,255,255,0.3);box-shadow:0 0 20px rgba(255,255,255,0.3)}.sidebar .bio .desc{width:85%;display:block;margin:0 auto;}.sidebar .bio .desc p{font-size:15px;font-weight:300;color:#f2f2f2}.sidebar .bio .social{margin-top:30px;}.sidebar .bio .social a{color:rgba(255,255,255,0.7);-webkit-transition:all 0.2s linear;-moz-transition:all 0.2s linear;-o-transition:all 0.2s linear;-ms-transition:all 0.2s linear;transition:all 0.2s linear;}.sidebar .bio .social a:hover,.sidebar .bio .social a:focus{color:#fff}.sidebar .bio .social i{font-size:28px}.sidebar .bio .social ul{list-style:none;margin:0;padding:0;}.sidebar .bio .social ul li{display:inline-block;margin-right:5px}.content{padding:30px 0 0 60px;position:relative;margin-left:420px;clear:both;overflow:auto;color:#777;}.content .title{padding-bottom:20px;}.content .title i{float:left;color:#233f5d;font-size:26px;margin-right:15px}.content .title h2{color:#555}.content .title .item{margin-bottom:30px;}.content .title .item h3{color:#777;margin-bottom:5px}.content .title .item span{color:rgba(35,63,93,0.9);font-weight:300}.content .title .item p{margin-top:0;width:95%;letter-spacing:1.1px;line-height:25px}.content .title .w33{width:30%;display:inline-block}.skills{height:10px;position:relative;background:#233f5d;border-radius:50px;padding:6px;width:90%;margin-top:10px;}.skills span{display:block;height:100%;border-top-right-radius:8px;border-bottom-right-radius:8px;border-top-left-radius:20px;border-bottom-left-radius:20px;background-color:  #A81A2B;overflow:hidden;position:relative;-webkit-box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);box-shadow:inset 0 2px 9px rgba(255,255,255,0.3),inset 0 -2px 6px rgba(0,0,0,0.4);}.skills span:after{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background-image:-webkit-linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);background-image:-moz-linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);background-image:-o-linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);background-image:-ms-linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);background-image:linear-gradient(-45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent);z-index:1;-webkit-background-size:50px 50px;-moz-background-size:50px 50px;background-size:50px 50px;-webkit-animation:move 4s linear infinite;-moz-animation:move 4s linear infinite;-o-animation:move 4s linear infinite;-ms-animation:move 4s linear infinite;animation:move 4s linear infinite;overflow:hidden}@-webkit-keyframes move{0%{background-position:0 0}100%{background-position:50px 50px}}@-moz-keyframes move{0%{background-position:0 0}100%{background-position:50px 50px}}@media only screen and (max-width:768px){.sidebar{-webkit-box-shadow:none;box-shadow:none;padding-top:60px;padding-bottom:60px;margin-right:0;width:100%;position:relative;}.sidebar .bio{position:relative;top:0%;left:0%}.content{margin-left:0;position:relative;padding:20px;}.content .title .item h3 span{display:block}.content .title .item p{width:100%;text-align:justify}.content .title .skills{width:100%;margin-top:0}.content .title .w33{width:95%;display:inline-block}}/*# sourceMappingURL=style.css.map */
      </style>
    </head>
    <body>
      <header>
        <div class="wrapper">
          <div class="sidebar">
            <div class="bio">
    
              <div class="title">
                <h1>${personDetail.firstName} ${personDetail.lastName}</h1>
                <h2>${jobPosition}</h2>
              </div>
              <div class="desc">
                <p>${userSummary}</p>
              </div>
              <div class="address">
                <p>${personDetail.city} , ${personDetail.country}.</p>
              </div>
              <div class="social">
                <ul>
                  <li>
                    <a href=""></a>${personDetail.phone}
                  </li>
                  <li>
                    <a href=""></a> ${personDetail.email}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content-wrapper">
          <div class="content">
            
              ${renderExperience()}
    
            
              ${renderEducation()}
        
            ${renderCertificate()} ${renderAwards()} ${renderReferences()}
            <div class="title">
              <h2>SKILLS</h2>
              <div class="item w33">
                <h3>${renderSkills()}</h3>
              </div>
              <div class="title">
                <h2>HOBBIES</h2>
                <div class="item w33">
                  <h3>${renderHobbies()}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </body>
    </html>
   `;
}