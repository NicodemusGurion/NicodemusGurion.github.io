function QuranRefs() {
    var mainDiv = document.getElementById("thecontent");
    var text = mainDiv.innerHTML;
  console.log(text);
    const regex = /(surah[s]*\s*[0-9\:\,\-\;\s]*[0-9])/gi;
    mainDiv.innerHTML = text.replace(regex, (match, surah) => SurahLink(surah));
}

function SurahLink(input) {
  console.log("surah", input);
  const surahs = input.split(';');
  const chapterLinks = surahs.map(chapter => ChapterLink(chapter));
  return chapterLinks.join(';');
}

function ChapterLink(input) {
  console.log("chapter", input);
  const [chapterStr, verses] = input.split(':', 2);
  const chapter = chapterStr.replace(/[^\d]/g, '');
  const versesLinks = input.split(",").map(verses => VersesLink(chapter, verses));
  return versesLinks.join(', ');
}

function VersesLink(chapter, verses) {
  console.log("verse",chapter, verses);
  const versesStripped = verses.replace(/^[^:]*:/g, '').replace(/[^\d-]/g, '');
  return `<a href="https://quran.com/${chapter}/${versesStripped}">${verses}</a>`;
}

/*function parseAndReplace(text) {
  const regex = /(surah[s]*\s*[0-9\:\,\-\;\s]*[0-9])/gi;
  return text.replace(regex, (match, surah) => SurahLink(surah.trim()));
}*/
