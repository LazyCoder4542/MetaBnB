import {useEffect, useState} from 'react';

export const useMediaQuery = (query) => {
  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  return matches;
};

function reverse(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
}
function concatNum(number) {
    var string = "";
    var rev_string = reverse(number.toString());
    if (rev_string.length > 3) {
        if (rev_string.length > 6) {
            //Millions or More
            if (rev_string.length > 9) {
            //Billion or More
            let decimal =
                parseInt(rev_string[8]) >= 5
                ? `.${rev_string[8]}`
                : "";
            string = `${reverse(rev_string.slice(9)) + decimal}B`;
            } else {
            //Million
            let decimal =
                parseInt(rev_string[5]) >= 5
                ? `.${rev_string[5]}`
                : "";
            string = `${reverse(rev_string.slice(6)) + decimal}M`;
            }
        } else {
            //Thousand
            let decimal =
            parseInt(rev_string[2]) >= 5 ? `.${rev_string[2]}` : "";
            string = `${reverse(rev_string.slice(3)) + decimal}K`;
        }
    } else {
      string = reverse(rev_string);
    }
    return string;
}
export {reverse, concatNum}