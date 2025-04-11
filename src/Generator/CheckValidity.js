// const domains = require('./DomainConfig');
const _DomainConfig = require('./DomainConfig');
// const { firstLetterCaptalize, firstLetterLowerCase } = require('./util');

// exports.domains  = domains.domains
// let isValid = true;
// exports.validate = () => {
//   // domains must be an Object
//   if (typeof this.domains != 'object') {
//     isValid = false;
//     console.log(`domains expect to be an Object`);
//   }

//   Object.keys(this.domains).map((domain) => {
//     // domains[domain] must be an Object
//     if (typeof this.domains[domain] != 'object') {
//       isValid = false;
//       console.log(`domains[${domain}] expect to be an Object`);
//     }

//     // length of each domains[domain] must be exactly 3
//     if (Object.keys(this.domains[domain]).length != 3) {
//       isValid = false;
//       console.log(
//         `Domain ${domain} do not obey the Domains structure rule to have exact length of 3.`
//       );
//     }

//     //  each domains[domain] must have 'jpas', 'storedProcedure', 'restServices' keys
//     if (!('jpas' in this.domains[domain])) isValid = false;
//     if (!('storedProcedures' in this.domains[domain])) isValid = false;
//     if (!('restServices' in this.domains[domain])) isValid = false;

//     //  -----------------------------------------
//     //  |                  JPAs                 |
//     //  -----------------------------------------
//     Object.keys(this.domains[domain]['jpas']).map((jpa) => {
//       // The jpa name must start with lowerCaseLetter letter.
//       if (jpa != firstLetterLowerCase(jpa)) {
//         isValid = false;
//         console.log(`[${domain}][jpas][${jpa}]`);
//         console.log(
//           `domains[${domain}][jpas][${jpa}] the jpa name must start with lowerCase letter.`
//         );
//       }
//       // length of each jpa must be exactly 3
//       if (
//         !(
//           // Object.keys(this.domains[domain]['jpas'][jpa]).length == 0 ||
//           (Object.keys(this.domains[domain]['jpas'][jpa]).length == 3)
//         )
//       ) {
//         isValid = false;
//         console.log(
//           `domains[${domain}][jpas][${jpa}] length of jpa object must be be exactly 3.`
//         );
//       }
//       // The jpa object must have 'datasourceName' key.
//       if (!('datasourceName' in this.domains[domain]['jpas'][jpa])) {
//         isValid = false;
//         console.log(
//           `domains[${domain}][jpas][${jpa}] jpa object must have 'datasourceName' key.`
//         );
//       }
//       //  The 'datasourceName' value in jpa object must be in loweCase .
//       if (
//         this.domains[domain]['jpas'][jpa]['datasourceName'] !=
//         this.domains[domain]['jpas'][jpa]['datasourceName'].toLowerCase()
//       ) {
//         isValid = false;
//         console.log(
//           `domains[${domain}][jpas][${jpa}] The 'datasourceName' value must be in lowerCase.`
//         );
//       }

//       // The jpa object must have 'schema' key.
//       if (!('schema' in this.domains[domain]['jpas'][jpa])) {
//         isValid = false;
//         console.log(
//           `domains[${domain}][jpas][${jpa}] The jpa object must have 'schema' key.`
//         );
//       }
//       //  each schema value in jpa object must be in loweCase .
//       // if (
//       //   this.domains[domain]['jpas'][jpa]['schema'] !=
//       //   this.domains[domain]['jpas'][jpa]['schema'].toLowerCase()
//       // ) {
//       //   isValid = false;
//       //   console.log(
//       //     `'schema' value in domains[${domain}][jpas][${jpa}] must be in lowerCase.`
//       //   );
//       // }

//       // The jpa object must have 'content' key.
//       if (!('content' in this.domains[domain]['jpas'][jpa])) {
//         isValid = false;
//         console.log(
//           `domains[${domain}][jpas][${jpa}] The jpa object must have 'content' key.`
//         );
//       }

//       // The jpa object must have 'content' key with an Array type
//       if (
//         Array.isArray(this.domains[domain]['jpas'][jpa]['content']) == false
//       ) {
//         isValid = false;
//         console.log(
//           `domains[${domain}][jpas][${jpa}] The jpa object must have a 'content' key with 'Array' type.`
//         );
//       }

//       // The jpa object must have 'content' key with atleast 1 element.
//       if (this.domains[domain]['jpas'][jpa]['content'].length < 1) {
//         {
//           isValid = false;
//           console.log(
//             `domains[${domain}][jpas][${jpa}] The jpa object must have 'content' array with atleast 1 element.`
//           );
//         }
//       }

//       //  The 'content' specific rules
//       this.domains[domain]['jpas'][jpa]['content'].map((row, indext) => {
//         row.map((cols) => {
//           //  The 'content' array must have 'name' key.
//           if (!('name' in cols)) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have 'name' key.`
//             );
//           }

//           //  The 'content' array must have 'title' key.
//           if (!('title' in cols)) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have 'title' key.`
//             );
//           }
//           //  The 'content' array must have 'title' key and its value must starts with lowerCase letter.
//           if (cols['title'] != firstLetterLowerCase(cols['title'])) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have 'title' key and its value must starts with lowerCase letter.`
//             );
//           }

//           //  The 'content' array must have 'value' key.
//           if (!('value' in cols)) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have 'value' key.`
//             );
//           }

//           //  The 'content' array must have [value][type] key.
//           if (!('type' in cols['value'])) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have [value][type] key.`
//             );
//           }
//           //  The 'content' array must have [value][type] key and its value must be one of 'primitive' or 'emptyCell'.
//           if (
//             cols['value']['type'] != 'primitive' &&
//             cols['value']['type'] != 'emptyCell'
//           ) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have [value][type] key and its value must be one of 'primitive' or 'emptyCell.`
//             );
//           }

//           //  The 'content' array must have [value][schema] key.
//           if (!('schema' in cols['value'])) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have [value][schema] key.`
//             );
//           }

//           //  The 'content' array must have [value][schema][type] key.
//           if (!('type' in cols['value']['schema'])) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have [value][schema][type] key.`
//             );
//           }
//           //  The 'content' array must have [value][schema][type] key and its value must be 'String'.
//           if (
//             cols['value']['schema']['type'] != 'emptyCell' &&
//             cols['value']['schema']['type'] != 'String' &&
//             cols['value']['schema']['type'] != 'Date'
//           ) {
//             isValid = false;
//             console.log(
//               `domains[${domain}][jpas][${jpa}] The 'content' array must have [value][schema][type] key and its value must be 'String'.`
//             );
//             console.log(cols['value']['schema']['type']);
//           }
//         });
//       });
//       //  each content value in jpa object must be in loweCase .
//       // if (
//       //   this.domains[domain]['jpas'][jpa]['content'] !=
//       //   this.domains[domain]['jpas'][jpa]['content'].toLowerCase()
//       // ) {
//       //   isValid = false;
//       //   console.log(
//       //     `'content' value in domains[${domain}][jpas][${jpa}] must be in lowerCase.`
//       //   );
//       // }
//     });

//     //  -----------------------------------------
//     //  |             storedProcedures           |
//     //  -----------------------------------------
//     Object.keys(this.domains[domain]['storedProcedures']).map(
//       (storedProcedure) => {
//         // length of each domains[domain][storedProcedures][storedProcedure] must be exactly 6
//         if (
//           !(
//             Object.keys(
//               this.domains[domain]['storedProcedures'][storedProcedure]
//             ).length == 6
//           )
//         ) {
//           isValid = false;
//           console.log(
//             ` storedProcedures object length in domains[${domain}][storedProcedures][${storedProcedure}] must eigther be exactly 6.`
//           );
//         }

//         //  each storedProcedure object must have name key.
//         if (
//           !('name' in this.domains[domain]['storedProcedures'][storedProcedure])
//         ) {
//           isValid = false;
//           console.log(
//             ` storedProcedure object in domains[${domain}][storedProcedures][${storedProcedure}] must have 'name' key.`
//           );
//         }
//         //  each storedProcedure object must have description key.
//         if (
//           !(
//             'description' in
//             this.domains[domain]['storedProcedures'][storedProcedure]
//           )
//         ) {
//           isValid = false;
//           console.log(
//             ` storedProcedure object in domains[${domain}][storedProcedures][${storedProcedure}] must have 'description' key.`
//           );
//         }
//         //  each storedProcedure object must have datasourceName key.
//         if (
//           !(
//             'datasourceName' in
//             this.domains[domain]['storedProcedures'][storedProcedure]
//           )
//         ) {
//           isValid = false;
//           console.log(
//             ` storedProcedure object in domains[${domain}][storedProcedures][${storedProcedure}] must have 'datasourceName' key.`
//           );
//         }
//         //  each storedProcedure object must have schema key.
//         if (
//           !(
//             'schema' in
//             this.domains[domain]['storedProcedures'][storedProcedure]
//           )
//         ) {
//           isValid = false;
//           console.log(
//             ` storedProcedure object in domains[${domain}][storedProcedures][${storedProcedure}] must have 'schema' key.`
//           );
//         }
//         //  each storedProcedure object must have schema key.
//         if (
//           !(
//             'parameters' in
//             this.domains[domain]['storedProcedures'][storedProcedure]
//           )
//         ) {
//           isValid = false;
//           console.log(
//             ` storedProcedure object in domains[${domain}][storedProcedures][${storedProcedure}] must have 'parameters' key.`
//           );
//         }
//         //  each storedProcedure object must have schema key.
//         if (
//           !(
//             'resultSet' in
//             this.domains[domain]['storedProcedures'][storedProcedure]
//           )
//         ) {
//           isValid = false;
//           console.log(
//             ` storedProcedure object in domains[${domain}][storedProcedures][${storedProcedure}] must have 'resultSet' key.`
//           );
//         }
//       }
//     );

//     //  -----------------------------------------
//     //  |              restServices             |
//     //  -----------------------------------------
//   });

//   return isValid;
// };

// console.log(isValid);
// console.log(this.validate());
// console.log(isValid);

// console.log(typeof this.domains);

// const x = _DomainConfig.validate();
// console.log(x);
// const domains = _DomainConfig.domains;
// this.validate();
if (_DomainConfig.validate() == true) {
  console.log('continue to the remain of programm');
}
