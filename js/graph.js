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
  manipulation: {
    editEdge: function(nodeData,callback) {
      nodeData.label = prompt("Please enter edge label", "");
      callback(nodeData);
    }
  }
};

var nodes = new vis.DataSet([
  {id: 1, label: 'Python', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49750755-d7c16280-fc92-11e8-9b9f-c30e32832873.png'},
  {id: 2, label: 'Django', shape: "image", image: "https://user-images.githubusercontent.com/14116020/49750998-764dc380-fc93-11e8-92db-45e4219d13fe.png"},
  {id: 3, label: 'Django Rest Framework', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49751274-1f94b980-fc94-11e8-9c10-1f7c548bf3b1.png'},
  {id: 4, label: 'Pytest', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752502-b616aa00-fc97-11e8-8402-cf67e0e9f01b.png'},
  {id: 5, label: 'Data Science', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752565-dcd4e080-fc97-11e8-808d-b257457c9631.png'},
  {id: 6, label: 'Machine Learning', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752603-fece6300-fc97-11e8-8a7d-271d29394b4a.png'},
  {id: 7, label: 'Javascript', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49751796-8070c180-fc95-11e8-93b0-90ddebe50167.png'},
  {id: 8, label: 'Jquery', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752639-26253000-fc98-11e8-92c3-f740a9f476a8.png'},
  {id: 9, label: 'Typescript', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752676-39d09680-fc98-11e8-9cfb-3d11f9e30db9.png'},
  {id: 10, label: 'Angular', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49751731-5ae3b800-fc95-11e8-9808-a6d8cee4a021.png'},
  {id: 11, label: 'Ionic', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752702-4bb23980-fc98-11e8-9e71-4315c25907d2.png'},
  {id: 12, label: 'Native Script', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752731-5bca1900-fc98-11e8-95ff-901098260517.png'},
  {id: 13, label: 'NodeJS', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752753-6e445280-fc98-11e8-8c48-9a53f6fd5bb1.png'},
  {id: 14, label: 'Database', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753458-9fbe1d80-fc9a-11e8-814f-7885f2db9242.png'},
  {id: 15, label: 'PostgreSQL', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49751989-199fd800-fc96-11e8-9f9c-782d00f81cff.png'},
  {id: 16, label: 'MySQL', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752069-5ff53700-fc96-11e8-8020-668abcc2d8ce.png'},
  {id: 17, label: 'SQLite', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752843-b794a200-fc98-11e8-9732-b0836f137a08.png'},
  {id: 18, label: 'Java', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752949-0fcba400-fc99-11e8-9365-af9290c1c50d.png'},
  {id: 19, label: 'Spring Boot', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49752984-2540ce00-fc99-11e8-985c-4158bcd0dcb4.png'},
  {id: 20, label: 'Git', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753012-3689da80-fc99-11e8-84a6-226c2a2590e8.png'},
  {id: 21, label: 'Github', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753031-47d2e700-fc99-11e8-94d6-261b33202262.png'},
  {id: 22, label: 'Gitlab', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753053-591bf380-fc99-11e8-89a8-d4e97fc0c816.png'},
  {id: 23, label: 'Linux', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753074-6afd9680-fc99-11e8-8cb9-75b5f87ef17b.png'},
  {id: 24, label: 'Docker', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753132-8e284600-fc99-11e8-814c-fd5b8abc5385.png'},
  {id: 25, label: 'Travis-CI', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753153-a304d980-fc99-11e8-9309-3fe62cc7a176.png'},
  {id: 26, label: 'Codacy', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753173-b1eb8c00-fc99-11e8-9a13-d9828a90b2be.png'},
  {id: 27, label: 'Web', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753494-c2503680-fc9a-11e8-89c6-67968ba6ed8f.png'},
  {id: 28, label: 'Mobile', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753256-f414cd80-fc99-11e8-89cb-2d04dd4b37f1.png'},
  {id: 29, label: 'HTML', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753303-160e5000-fc9a-11e8-8ef2-65f84ac22dd6.png'},
  {id: 30, label: 'CSS', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753327-28888980-fc9a-11e8-90ba-3a621a844c2f.png'},
  {id: 31, label: 'Bootstrap', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753342-376f3c00-fc9a-11e8-964d-3f0759cbc150.png'},
  {id: 32, label: 'Materializer', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753365-4b1aa280-fc9a-11e8-8c2d-130ccf695a8e.png'},
  {id: 33, label: 'IOS', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753379-5d94dc00-fc9a-11e8-8603-84e39293093a.png'},
  {id: 34, label: 'Android', shape: 'image', image: 'https://user-images.githubusercontent.com/14116020/49753401-6be2f800-fc9a-11e8-800b-a96990679c4d.png'},
]);

var edges = new vis.DataSet([
  {from: 1, to: 2, arrows: 'to'},
  {from: 2, to: 3, arrows: 'to'},
  {from: 1, to: 4, arrows: 'to'},
  {from: 1, to: 5, arrows: 'to'},
  {from: 1, to: 6, arrows: 'to'},
  {from: 7, to: 8, arrows: 'to'},
  {from: 7, to: 9, arrows: 'to'},
  {from: 9, to: 10, arrows: 'to'},
  {from: 10, to: 11, arrows: 'to'},
  {from: 10, to: 12, arrows: 'to'},
  {from: 7, to: 13, arrows: 'to'},
  {from: 14, to: 15, arrows: 'to'},
  {from: 14, to: 16, arrows: 'to'},
  {from: 14, to: 17, arrows: 'to'},
  {from: 18, to: 19, arrows: 'to'},
  {from: 18, to: 23, arrows: 'to'},
  {from: 18, to: 14, arrows: 'to'},
  {from: 7, to: 14, arrows: 'to'},
  {from: 7, to: 23, arrows: 'to'},
  {from: 1, to: 14, arrows: 'to'},
  {from: 1, to: 23, arrows: 'to'},
  {from: 20, to: 21, arrows: 'to'},
  {from: 20, to: 22, arrows: 'to'},
  {from: 23, to: 20, arrows: 'to'},
  {from: 23, to: 24, arrows: 'to'},
  {from: 23, to: 25, arrows: 'to'},
  {from: 23, to: 26, arrows: 'to'},
  {from: 24, to: 25, arrows: 'to'},
  {from: 24, to: 26, arrows: 'to'},
  {from: 19, to: 27, arrows: 'to'},
  {from: 2, to: 27, arrows: 'to'},
  {from: 3, to: 27, arrows: 'to'},
  {from: 13, to: 27, arrows: 'to'},
  {from: 10, to: 27, arrows: 'to'},
  {from: 29, to: 27, arrows: 'to'},
  {from: 30, to: 27, arrows: 'to'},
  {from: 29, to: 31, arrows: 'to'},
  {from: 30, to: 31, arrows: 'to'},
  {from: 29, to: 32, arrows: 'to'},
  {from: 30, to: 32, arrows: 'to'},
  {from: 28, to: 33, arrows: 'to'},
  {from: 28, to: 34, arrows: 'to'},
  {from: 11, to: 28, arrows: 'to'},
  {from: 12, to: 28, arrows: 'to'},
  {from: 29, to: 11, arrows: 'to'},
  {from: 30, to: 11, arrows: 'to'},
]);

var container = document.getElementById('graph');

var data = {
  nodes: nodes,
  edges: edges
};


var network = new vis.Network(container, data, options);
