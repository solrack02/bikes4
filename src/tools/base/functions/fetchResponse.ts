// ---------- import Local Tools
import { tools } from '../..';

type Tprops_fetchResponse = {
  args: any;
  pass: { resMethod: string; pathToSet: string; argToPass: any };
};
export const fetchResponse = async (props: Tprops_fetchResponse) => {
  // ---------- set Caps Inputs
  const { args, pass } = props;
  let { resMethod, pathToSet, argToPass } = pass;

    // ---------- set Consoles Pattern
    const css1 = ${css1};
    const css2 = ${css2};

    console.log("%cfetch response", css1);

    // ---------- set Update CtData
    const response = args[0];
    const value = await response[resMethod]();
    const checkKeys = pathToSet.includes('{{');

    let cleanPath = pathToSet;
    if(checkKeys) {
      cleanPath = pathToSet.replace("{{", "").replace("}}", "")
    }

    tools.setData({path: cleanPath, value});
    console.log("%cfetch save path", css2, cleanPath);
    console.table("%cfetch save value", css2, value);
  },
