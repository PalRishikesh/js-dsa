
var groupAnagrams = function(strs) {
    const map = new Map();
    for(const string of strs){
        const key = string.split('').sort().join('');
        // console.log(key)
        if(!map[key]){
            map[key] = [string];
        }
        else{
            map[key].push(string)
        }
    }

    // console.log(map)
    // console.log(Object.values(map))
    return Object.values(map);
    // Time: 0(n* K log K), Space: 0(nk)
};




let strs = ["eat","tea","tan","ate","nat","bat"];

groupAnagrams(strs);