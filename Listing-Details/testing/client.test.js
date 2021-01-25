/**
 * @jest-environment jsdom
 */
/* eslint-disable */
const React = require('react');
const { shallow, configure } = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
import App from '../client/src/components/App.jsx';
import Listings from '../client/src/components/Listings.jsx';
import Search from '../client/src/components/Search.jsx';

const sample = [
  {
      "_id": "6008fe45f8b3093164c1862e",
      "home": 101,
      "title": "Modular Home",
      "location": "Mars",
      "rating": 1,
      "__v": 0,
      "photoUrls": [
          "https://feclistingphotos.s3.us-east-2.amazonaws.com/Mars/101/1.webp",
          "https://feclistingphotos.s3.us-east-2.amazonaws.com/Mars/101/2.webp"
      ]
  }
];

configure({ adapter: new EnzymeAdapter() });

describe("App", () => {
  it("renders with no errors", () => {
    shallow(<App />);
  });
});

describe("Listings", () => {
  it("renders with no errors", () => {
    shallow(<Listings searchResults={sample} />);
  });
});

describe("Search", () => {
  it("renders with no errors", () => {
    shallow(<Search />);
  });
});
