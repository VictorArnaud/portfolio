var options = {
  autoResize: true,
  height: '100%',
  width: '100%',
  groups: {
    predicate: {
      shape: "ellipse"
    },
    object: {
      shape: "box",
    }
  },
};

var nodes = new vis.DataSet([
  {id: 1, label: 'Python', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49750755-d7c16280-fc92-11e8-9b9f-c30e32832873.png'},
  {id: 2, label: 'Django', shape: "image", image: "https://user-images.githubusercontent.com/14116020/49750998-764dc380-fc93-11e8-92db-45e4219d13fe.png"},
  {id: 3, label: 'Django Rest Framework', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49751274-1f94b980-fc94-11e8-9c10-1f7c548bf3b1.png'},
  {id: 4, label: 'Pytest', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752502-b616aa00-fc97-11e8-8402-cf67e0e9f01b.png'},
  {id: 5, label: 'Data Science', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752565-dcd4e080-fc97-11e8-808d-b257457c9631.png'},
  {id: 6, label: 'Machine Learning', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752603-fece6300-fc97-11e8-8a7d-271d29394b4a.png'},
  {id: 7, label: 'Javascript', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49751796-8070c180-fc95-11e8-93b0-90ddebe50167.png'},
  {id: 12, label: 'React Native', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/65401932-8c032400-dda1-11e9-863e-f13cd5bc9de5.png'},
  {id: 13, label: 'Electron', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/66019603-9cf71800-e4ba-11e9-9ee2-27f97e047739.png'},
  {id: 15, label: 'PostgreSQL', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49751989-199fd800-fc96-11e8-9f9c-782d00f81cff.png'},
  {id: 18, label: 'Windows', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/66019758-fbbc9180-e4ba-11e9-8fbf-e46d712ff949.png'},
  {id: 19, label: 'MacOS', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/66019858-640b7300-e4bb-11e9-91d0-1d32866f325a.png'},
  {id: 20, label: 'Git', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753012-3689da80-fc99-11e8-84a6-226c2a2590e8.png'},
  {id: 21, label: 'Github', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753031-47d2e700-fc99-11e8-94d6-261b33202262.png'},
  {id: 23, label: 'Linux', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753074-6afd9680-fc99-11e8-8cb9-75b5f87ef17b.png'},
  {id: 24, label: 'Docker', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753132-8e284600-fc99-11e8-814c-fd5b8abc5385.png'},
  {id: 25, label: 'AWS', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/77143689-a7a26b00-6a62-11ea-8a3b-0e0aa52e3fbb.png'},
  {id: 26, label: 'Raspberry', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/66019907-94531180-e4bb-11e9-8eb7-47c7c640e592.png'},
  {id: 27, label: 'Web', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753494-c2503680-fc9a-11e8-89c6-67968ba6ed8f.png'},
  {id: 28, label: 'Mobile', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753256-f414cd80-fc99-11e8-89cb-2d04dd4b37f1.png'},
  {id: 29, label: 'HTML', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753303-160e5000-fc9a-11e8-8ef2-65f84ac22dd6.png'},
  {id: 30, label: 'CSS', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753327-28888980-fc9a-11e8-90ba-3a621a844c2f.png'},
  {id: 31, label: 'Bootstrap', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753342-376f3c00-fc9a-11e8-964d-3f0759cbc150.png'},
  {id: 33, label: 'IOS', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753379-5d94dc00-fc9a-11e8-8603-84e39293093a.png'},
  {id: 34, label: 'Android', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753401-6be2f800-fc9a-11e8-800b-a96990679c4d.png'},
  {id: 35, label: 'React', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/65401932-8c032400-dda1-11e9-863e-f13cd5bc9de5.png'},
  {id: 36, label: 'Computer Vision', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/65402057-60346e00-dda2-11e9-934d-14ab3ff5a1b5.png'},
  {id: 37, label: 'GraphQL', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/65402104-c7522280-dda2-11e9-86f2-206e51608c1e.png'},
  {id: 38, label: 'API', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/66020011-10e5f000-e4bc-11e9-9bd0-529ce2bdfab1.png'}
]);

var edges = new vis.DataSet([
  {from: 2, to: 1, arrows: 'to'},
  {from: 36, to: 1, arrows: 'to'},
  {from: 2, to: 3, arrows: 'to'},
  {from: 2, to: 37, arrows: 'to'},
  {from: 4, to: 1, arrows: 'to'},
  {from: 5, to: 1, arrows: 'to'},
  {from: 6, to: 1, arrows: 'to'},
  {from: 1, to: 20, arrows: 'to'},
  {from: 7, to: 20, arrows: 'to'},
  {from: 15, to: 25, arrows: 'to'},
  {from: 13, to: 35, arrows: 'to'},
  {from: 13, to: 18, arrows: 'to'},
  {from: 13, to: 19, arrows: 'to'},
  {from: 13, to: 23, arrows: 'to'},
  {from: 23, to: 26, arrows: 'to'},
  {from: 35, to: 7, arrows: 'to'},
  {from: 12, to: 7, arrows: 'to'},
  {from: 2, to: 15, arrows: 'to'},
  {from: 20, to: 21, arrows: 'to'},
  {from: 20, to: 22, arrows: 'to'},
  {from: 24, to: 23, arrows: 'to'},
  {from: 21, to: 25, arrows: 'to'},
  {from: 23, to: 25, arrows: 'to'},
  {from: 3, to: 38, arrows: 'to'},
  {from: 37, to: 38, arrows: 'to'},
  {from: 38, to: 24, arrows: 'to'},
  {from: 25, to: 27, arrows: 'to'},
  {from: 31, to: 29, arrows: 'to'},
  {from: 31, to: 30, arrows: 'to'},
  {from: 29, to: 32, arrows: 'to'},
  {from: 30, to: 32, arrows: 'to'},
  {from: 28, to: 33, arrows: 'to'},
  {from: 28, to: 34, arrows: 'to'},
  {from: 12, to: 28, arrows: 'to'},
  {from: 35, to: 31, arrows: 'to'}
]);

var container = document.getElementById('graph');

var data = {
  nodes: nodes,
  edges: edges
};


var network = new vis.Network(container, data, options);
