import series from '../content/series.json';

export const getSeries = (lang) => {
  return series.map(s => {
    return {
      id: s.id,
      ...s['en'],
      ...s[lang],
    };
  });
};

export const getSeriesById = (lang, id) => getSeries(lang).find(s => s.id === id);
