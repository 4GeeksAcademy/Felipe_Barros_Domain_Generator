/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ccTLD = [".es", ".com", ".cl"];

window.onload = function() {
  //write your code here
  let domainArrays = [];
  pronoun.forEach(pronouns => {
    adj.forEach(adjs => {
      noun.forEach(nouns => {
        ccTLD.forEach(ccTLDs =>
          domainArrays.push(pronouns + adjs + nouns + ccTLDs)
        );
      });
    });
  });

  function createList(element) {
    return `<li>${element}</li>`;
  }

  function createHtmlList(arr) {
    let lisOk = arr.map(createList);

    let htmlUl = "<ul>";
    for (let lis of lisOk) {
      htmlUl += lis;
    }
    htmlUl += "</ul>";
    return htmlUl;
  }

  document.getElementById("domainGenerator").innerHTML = createHtmlList(
    domainArrays
  );
};
