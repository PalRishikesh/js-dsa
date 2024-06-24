var isSubsequence = function(s, t) {
    let sIndex = 0;
    for (let tIndex = 0; tIndex < t.length; tIndex++) {
        if(sIndex == s.length) return true;
        if(s[sIndex] == t[tIndex]){
            sIndex++;
        }
    }

    return sIndex === s.length;
};