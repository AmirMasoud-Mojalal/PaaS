import radioComponentBody from '../components/radio/radioComponentBody';
import checkboxComponentBody from '../components/check/checkboxComponentBody';
import textComponentBody from '../components/text/textComponentBody';
import textAreaComponentBody from '../components/textArea/textAreaComponentBody';
import selectComponentBody from '../components/select/selectComponentBody';
import switchComponentBody from '../components/switch/switchComponentBody';
import {
  isRadioComponent,
  isCheckComponent,
  isTextComponent,
  isTextAreaComponent,
  isSelectComponent,
  isSwitchComponent,
} from './objectFormValidator';

export const objectFormGenerator = (rows) => {
  var importsObject = {};
  var formBody = ``;
  var result = ``;
  const addImportObject = (importObject) => {
    Object.keys(importObject).map((object) => {
      importsObject[object] = importObject[object];
      return null;
    });
  };
  rows.map((row) => {
    formBody += `
<Row>`;
    row.map((col) => {
      //  Radio
      if (isRadioComponent(col)) {
        result = radioComponentBody(col);
        addImportObject(result.import);
        formBody += result.body;
        //  Checkbox
      } else if (isCheckComponent(col)) {
        result = checkboxComponentBody(col);
        addImportObject(result.import);
        formBody += result.body;
      }
      //  Text
      else if (isTextComponent(col)) {
        result = textComponentBody(col);
        addImportObject(result.import);
        formBody += result.body;
      }
      //  TextArea
      else if (isTextAreaComponent(col)) {
        result = textAreaComponentBody(col);
        addImportObject(result.import);
        formBody += result.body;
      }
      //  Select
      else if (isSelectComponent(col)) {
        result = selectComponentBody(col);
        addImportObject(result.import);
        formBody += result.body;
      }
      //  Switch
      else if (isSwitchComponent(col)) {
        result = switchComponentBody(col);
        addImportObject(result.import);
        formBody += result.body;
      }
      return null;
    });
    formBody += `
</Row>`;
    return null;
  });
  console.log(formBody);
  console.log(importsObject);
};
// module.exports = objectFormGenerator;
