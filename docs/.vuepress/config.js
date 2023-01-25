const version = require("./../../package.json").version;
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components');
const { path } = require('@vuepress/utils');

module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/public/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#fff' }],
    // ...other tags
  ],
  lang: 'pt-BR',
  title: `Pirates Community`,
  description: 'Fique por dentro de tutoriais, cursos e livros para alavancar mais a sua carreira',
  theme: '@vuepress/theme-default',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'Português-Brasileiro',
      title: 'Pirates Community',
      description: 'Pirates Community vem recheado de tutoriais, cursos e livros para você apreender na prática de forma fácil'
    },
    '/en/': {
      lang: 'Inglês',
      title: 'Pirates Community',
      description: 'Pirates Community is full of tutorials, courses and books for you to learn in practice in an easy way'
    },
    '/fr/': {
      lang: 'Francês',
      title: 'Pirates Community',
      description: 'La communauté Pirates Vix regorge de tutoriels, de cours et de livres pour que vous puissiez apprendre en pratique de manière simple'
    },
  },
  plugins: [
    '@vuepress/back-to-top', 
    '@vuepress/medium-zoom', 
    '@vuepress/plugin-search',
    [
      '@vuepress/register-components',
      // {
      //   componentsDir: path.resolve(__dirname, './components'),
      // },
      registerComponentsPlugin({
        components: {
          // Card: path.resolve(__dirname, './components/Card.vue'),
          componentsDir: path.resolve(__dirname, './components')
          
        },
      }),
    ],
    {
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    },
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-XXXXXXXXXX',
      },
    ],
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
  ],
  themeConfig: {
    docsRepo: 'https://github.com/piratesvix-academy/community',
    docsBranch: 'main',
    navbar: [
      // DOCS
      {
        text: 'Tutoriais',
        children: [
          {
            text: 'Desenvolvimento',
            children: [
              {text: 'Frontend', link: '/develop/docs/front-end.html'},
              {text: 'Programação', link: '/develop/docs/programming.html'},
              {text: 'Big Data', link: '/develop/docs/big-data.html'},
              {text: 'DevOps', link: '/develop/docs/dev-ops.html'},
              {text: 'Mobile', link: '/develop/docs/mobile.html'},
              {text: 'Security', link: '/develop/docs/security.html'},
              {text: 'IoT', link: '/develop/docs/internet-of-things.html'},
            ]
          },
          {
            text: 'Empreendedorismo',
            children: [
              {text: 'Armazenamento', link: '/entrepreneurship/docs/storage.html'}, 
              {text: 'Clusters', link: '/entrepreneurship/docs/clusters.html'},
              {text: 'Implantação', link: '/entrepreneurship/docs/deploy.html'},
            ]
          },
          {
            text: 'Economia',
            children: [
              {text: 'Microeconomia', link: '/economy/docs/microeconomics.html'},
              {text: 'Macroeconomia', link: '/economy/docs/macroeconomics.html'},
            ]
          },
          
          {
            text: 'Financeiro',
            children: [
              {text: 'Mercado Financeiro', link: '/finances/docs/financial-market.html'},
              {text: 'Gestão Financeira', link: '/finances/docs/financial-management.html'},
              {text: 'Administração', link: '/finances/docs/administration.html'},
              {text: 'Governança Corporativa', link: '/finances/docs/corporate-governance.html'},
            ]
          },
          
        ],
      },
      // TUTORIALS
      {
        text: 'Tutoriais',
        link: '/tutorials/intro-tutorials.html',
      },
      // APRENDER
      {
        text: 'Aprender',
        link: '/learn/intro-learn.html',
      },
      // LICENSE
      {
        text: 'Licença',
        link: '/license/license.html',
      },
      // SUPORT
      {
        text: 'Suporte',
        children: [
          {
            text: 'Contato',
            children: [
              {text: 'Discord', link: 'https://discord.im/'},
              {text: 'Line', link: 'https://line.im/'},
              {text: 'Status', link: 'https://status.im/'},
              {text: 'Telegram', link: 'https://telegram.im/'},
              {text: 'Skype', link: 'https://skype.im/'},
              {text: 'WhatsApp', link: 'https://telegram.im/'},
              {text: 'Viber', link: 'https://viber.im/'},
            ]
          },
          {
            text: 'Ajuda',
            children: [
              {text: 'Issues', link: 'https://github.com/piratesvix-academy/community/issues'},
              {text: 'Pull Request', link: 'https://github.com/pireatesvix-academy/community/pulls'}
            ]
          },
        ],
      },
    ],
    backToHome: 'Voltar ao inicio',
    locales: {
      '/': {
        selectLanguageName: 'Português-Brasileiro',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    lastUpdated: false,
    sidebar: {
      '/tutorials/intro-tutorials.html': [
        {
          text: 'Web Servers',
          link: '/tutorials/webservers/intro-webservers-tutorial.html',
          children: [
            {text: 'Apache', link: '/tutorials/webservers/apache/installing.html'},
            {text: 'Lighttpd', link: '/tutorials/webservers/lighttpd/intro.html'},
            {text: 'NGINX', link: '/tutorials/webservers/nginx/intro.html'},
            {text: 'XAMPP', link: '/tutorials/webservers/xampp/intro.html'},
            {text: 'Caddy', link: '/tutorials/webservers/caddy/intro.html'},
          ],
        },
        {
          text: 'Programação',
          link: '/tutorials/programm/intro-programm-tutorial.html',
          children: [ 
            {text: 'Assembly', link: '/tutorials/programm/assembly/intro.html'}, 
            {text: 'C/C++', link: '/tutorials/programm/cplusplus/intro.html'}, 
            {text: 'CSharp', link: '/tutorials/programm/csharp/intro.html'}, 
            {text: 'Go lang', link: '/tutorials/programm/go/intro.html'}, 
            {text: 'Elixir', link: '/tutorials/programm/elixir/intro.html'}, 
            {text: 'Rust lang', link: '/tutorials/programm/rust/intro.html'},
            {text: 'Ruby', link: '/tutorials/programm/ruby/intro.html'}, 
            {text: 'Javascript', link: '/tutorials/programm/javascript/intro.html'}, 
            {text: 'JAVA', link: '/tutorials/programm/java/intro.html'}, 
            {text: 'Kotlin', link: '/tutorials/programm/kotlin/intro.html'}, 
            {text: 'Swift', link: '/tutorials/programm/swift/intro.html'}, 
            {text: 'PHP', link: '/tutorials/programm/php/intro.html'}, 
            {text: 'Python', link: '/tutorials/programm/python/intro.html'}, 
            {text: 'Scala', link: '/tutorials/programm/scala/intro.html'},
            {text: 'Haskell', link: '/tutorials/programm/haskell/intro.html'}
          ],
        },
        {
          text: 'Banco de Dados',
          link: '/tutorials/database/intro-database-tutorial.html',
          children: [ 
            {text: 'Apache', link: '/tutorials/database/apache/intro.html'}, 
            {text: 'Couchbase', link: '/tutorials/database/couchbase/intro.html'}, 
            {text: 'Exasol', link: '/tutorials/database/exasol/intro.html'}, 
            {text: 'Ingres', link: '/tutorials/database/ingres/intro.html'},
            {text: 'Firebird', link: '/tutorials/database/firebird/intro.html'},
            {text: 'Linter', link: '/tutorials/database/linter/intro.html'},
            {text: 'Mimer SQL', link: '/tutorials/database/mimersql/intro.html'},
            {text: 'Microsoft SQL Server', link: '/tutorials/database/mss/intro.html'},
            {text: 'MongoDB', link: '/tutorials/database/mongodb/intro.html'}, 
            {text: 'MariaDB', link: '/tutorials/database/mariadb/intro.html'},
            {text: 'MySQL', link: '/tutorials/database/mysql/intro.html'},
            {text: 'Netezza', link: '/tutorials/database/netezza/intro.html'}, 
            {text: 'Oracle DB', link: '/tutorials/database/oracle/intro.html'},
            {text: 'PostgreSQL', link: '/tutorials/database/psql/intro.html'},
            {text: 'PrestoDB', link: '/tutorials/database/pdb/intro.html'},
            {text: 'Redis', link: '/tutorials/database/redis/intro.html'},
            {text: 'SAP MaxDB', link: '/tutorials/database/sap/intro.html'},
            {text: 'Teradata', link: '/tutorials/database/teradata/intro.html'},
            {text: 'Vertica', link: '/tutorials/database/vertica/intro.html'}, 
          ],
        },
        {
          text: 'Sistemas Operacionais',
          link: '/tutorials/os/intro-os-tutorial.html',
          children: [ 
            {text: 'Linux', link: '/tutorials/os/unix/linux.html'},
            {text: 'MacOS', link: '/tutorials/os/macos/macos.html'},
            {text: 'Windows', link: '/tutorials/os/win/windows.html'},
          ],
        },
      ],
      // LINUX * LINUX * LINUX * LINUX * LINUX * LINUX * LINUX
      '/tutorials/os/unix/linux.html': [
        {
          text: 'Distribuições',
          link: '/tutorials/os/unix/distributions/intro-linux.html',
          children: [ 
            {text: 'Ubuntu', link: '/tutorials/database/apache/intro.html'}, 
            {text: 'Fedora', link: '/tutorials/database/couchbase/intro.html'}, 
            {text: 'Mint', link: '/tutorials/database/exasol/intro.html'}, 
            {text: 'OpenSuse', link: '/tutorials/database/ingres/intro.html'},
            {text: 'Slackware', link: '/tutorials/database/firebird/intro.html'},
            {text: 'Debian', link: '/tutorials/database/linter/intro.html'},
            {text: 'GuaranaOS', link: '/tutorials/database/vertica/intro.html'}, 
            {text: 'Red Hat', link: '/tutorials/database/mimersql/intro.html'},
            {text: 'CentOS', link: '/tutorials/database/mss/intro.html'},
            {text: 'FreeBSD', link: '/tutorials/database/mss/intro.html'},
            {text: 'Arch', link: '/tutorials/database/mongodb/intro.html'}, 
            {text: 'Kubuntu', link: '/tutorials/database/mariadb/intro.html'},
            {text: 'Lubuntu', link: '/tutorials/database/mysql/intro.html'},
            {text: 'Kali', link: '/tutorials/database/netezza/intro.html'}, 
            {text: 'Parrot', link: '/tutorials/database/oracle/intro.html'},
            {text: 'PopOS', link: '/tutorials/database/oracle/intro.html'},
            {text: 'Blackbox', link: '/tutorials/database/psql/intro.html'},
            {text: 'PrestoDB', link: '/tutorials/database/pdb/intro.html'},
            {text: 'ZorinOS', link: '/tutorials/database/redis/intro.html'},
            {text: 'ElementaryOS', link: '/tutorials/database/sap/intro.html'},
            {text: 'Teradata', link: '/tutorials/database/teradata/intro.html'},
          ],
        },
      ],
      // C/C++ * C/C++ * C/C++ * C/C++ * C/C++ * C/C++ * C/C++
      '/tutorials/programm/cplusplus/intro.html': [
        {
          text: 'Requisitos',
          link: '/tutorials/programm/cplusplus/prerequisites.html',
          children: [ 
            {text: 'Instalando GCC/G++', link: '/tutorials/programm/cplusplus/installing.html'},
          ],
        },
        {
          text: 'Desenvolver',
          link: '/tutorials/programm/cplusplus/protocols/tcp/tcp.html',
          children: [ 
            {text: 'Files', link: '/tutorials/programm/cplusplus/file/intro.html'},
            {text: 'TCP Client/Server', link: '/tutorials/programm/cplusplus/protocols/tcp/tcp.html'},
            {text: 'UDP Client/Server', link: '/tutorials/programm/cplusplus/protocols/udp/udp.html'},
            {text: 'Criptografia', link: '/tutorials/programm/cplusplus/crypto/intro.html'},
            {text: 'Objetos', link: '/tutorials/programm/cplusplus/object/intro.html'},
          ],
        },
      ],
      '/tutorials/programm/cplusplus/file/intro.html': [
        {
          text: 'Arquivos em C++',
          link: '/tutorials/programm/cplusplus/file/intro.html',
          children: [ 
            {text: 'JSON', link: '/tutorials/programm/cplusplus/file/json.html'},
            {text: 'CSV', link: '/tutorials/programm/cplusplus/file/csv.html'},
            {text: 'XML', link: '/tutorials/programm/cplusplus/file/xml.html'},
          ],
        },
      ],
      '/tutorials/programm/cplusplus/object/intro.html': [
        {
          text: 'Arquivos em C++',
          link: '/tutorials/programm/cplusplus/file/intro.html',
          children: [ 
            {text: 'Files', link: '/tutorials/programm/cplusplus/file/intro.html'},
            {text: 'TCP Client/Server', link: '/tutorials/programm/cplusplus/protocols/tcp/tcp.html'},
            {text: 'UDP Client/Server', link: '/tutorials/programm/cplusplus/protocols/udp/udp.html'},
            {text: 'Criptografia', link: '/tutorials/programm/cplusplus/crypto/intro.html'},
          ],
        },
      ],
      '/tutorials/programm/cplusplus/protocols/tcp/tcp.html': [
        {
          text: 'Ambiente',
          link: '/tutorials/programm/cplusplus/prerequisites.html',
          children: [ 
            {text: 'Configurar no Linux', link: '/tutorials/programm/cplusplus/protocols/tcp/tcp_unix.html'},
            {text: 'Configurar no MacOS', link: '/tutorials/programm/cplusplus/protocols/tcp/tcp_darwin.html'},
            {text: 'Configurar no Windows', link: '/tutorials/programm/cplusplus/protocols/tcp/tcp_win.html'},
          ],
        },
      ],
      '/tutorials/programm/cplusplus/protocols/tcp/tcp_win.html': [
        {
          text: 'Ambiente',
          link: '/tutorials/programm/cplusplus/prerequisites.html',
          children: [ 
            {text: 'Configurar no Linux', link: '/tutorials/programm/cplusplus/protocols/tcp/tcp_unix.html'},
            {text: 'Configurar no MacOS', link: '/tutorials/programm/cplusplus/protocols/tcp/tcp_darwin.html'},
          ],
        },
        {
          text: 'Desenvolver',
          link: '/tutorials/programm/cplusplus/prerequisites.html',
          children: [ 
            {text: 'UDP Client/Server', link: '/tutorials/programm/cplusplus/protocols/udp/udp.html'},
            {text: 'Criptografia', link: '/tutorials/programm/cplusplus/crypto/intro.html'},
          ],
        },
        {
          text: 'Desenvolver',
          link: '/tutorials/programm/cplusplus/crypto/intro.html',
          children: [ 
            {text: 'XOR Cypher', link: '/tutorials/programm/cplusplus/crypto/xor.html'},
            {text: 'Vigenere Cypher', link: '/tutorials/programm/cplusplus/crypto/vigenere.html'},
          ],
        },
      ],
      '/tutorials/programm/cplusplus/crypto/intro.html': [
        {
          text: 'Algoritmos',
          link: '/tutorials/programm/cplusplus/crypto/intro.html',
          children: [ 
            {text: 'XOR Cypher', link: '/tutorials/programm/cplusplus/crypto/xor.html'},
            {text: 'Vigenere Cypher', link: '/tutorials/programm/cplusplus/crypto/vigenere.html'},
          ],
        },
      ],
      // JAVASCRIPT * JAVASCRIPT * JAVASCRIPT * JAVASCRIPT * JAVASCRIPT * JAVASCRIPT * JAVASCRIPT
      '/tutorials/programm/javascript/intro.html': [
        {
          text: 'Requisitos',
          children: [ 
            {text: 'Instalando Node.js', link: '/tutorials/programm/javascript/installing.html'},
          ],
        },
        {
          text: 'Desenvolver',
          children: [ 
            {text: 'Assíncrono/Síncrono', link: '/tutorials/programm/javascript/functions/intro.html'},
            {text: 'Autenticação', link: '/tutorials/programm/javascript/auth/intro.html'},
            {text: 'Criptografia', link: '/tutorials/programm/javascript/crypto/intro.html'},
            {text: 'Consumir API', link: '/tutorials/programm/javascript/protocols/http/intro.html'},
            {text: 'Criar Modulo', link: '/tutorials/programm/javascript/npm/intro.html'},
            {text: 'Data Types', link: '/tutorials/programm/javascript/structure/datatypes.html'},
            {text: 'Docker com JS', link: '/tutorials/programm/javascript/docker.html'},
            {text: 'Eventos', link: '/tutorials/programm/javascript/events/intro.html'},
            {text: 'Files', link: '/tutorials/programm/javascript/file/intro.html'},
            {text: 'HTTP Client/Server', link: '/tutorials/programm/javascript/protocols/http/http.html'},
            {text: 'TCP Client/Server', link: '/tutorials/programm/javascript/protocols/tcp/tcp.html'},
            {text: 'UDP Client/Server', link: '/tutorials/programm/javascript/protocols/udp/udp.html'},
            {text: 'Node runtime JS', link: '/tutorials/programm/javascript/runtime/node.html'},
            {text: 'Deno runtime JS', link: '/tutorials/programm/javascript/runtime/deno.html'},
            {text: 'Telnet', link: '/tutorials/programm/javascript/protocols/telnet/telnet.html'},
            {text: 'Objeto', link: '/tutorials/programm/javascript/object/intro.html'},
            {text: 'Métodos', link: '/tutorials/programm/javascript/methods/intro.html'},
            {text: 'Socket.IO', link: '/tutorials/programm/javascript/socket/intro.html'},
          ],
        },
      ],
      // PYTHON * PYTHON * PYTHON * PYTHON * PYTHON * PYTHON * PYTHON
      '/tutorials/programm/python/intro.html': [
        {
          text: 'Requisitos',
          children: [ 
            {text: 'Instalando Pip', link: '/tutorials/programm/python/installing.html'},
          ],
        },
        {
          text: 'Desenvolver',
          children: [ 
            {text: 'Assíncrono/Síncrono', link: '/tutorials/programm/python/functions/intro.html'},
            {text: 'Autenticação', link: '/tutorials/programm/python/auth/intro.html'},
            {text: 'Criptografia', link: '/tutorials/programm/python/crypto/intro.html'},
            {text: 'Consumir API', link: '/tutorials/programm/python/protocols/http/intro.html'},
            {text: 'Criar Modulo', link: '/tutorials/programm/python/npm/intro.html'},
            {text: 'Data Types', link: '/tutorials/programm/python/structure/datatypes.html'},
            {text: 'Docker com Python', link: '/tutorials/programm/python/docker.html'},
            {text: 'Eventos', link: '/tutorials/programm/python/events/intro.html'},
            {text: 'Files', link: '/tutorials/programm/python/file/intro.html'},
            {text: 'HTTP Client/Server', link: '/tutorials/programm/python/protocols/http/http.html'},
            {text: 'TCP Client/Server', link: '/tutorials/programm/python/protocols/tcp/tcp.html'},
            {text: 'UDP Client/Server', link: '/tutorials/programm/python/protocols/udp/udp.html'},
            {text: 'Telnet', link: '/tutorials/programm/python/protocols/telnet/telnet.html'},
            {text: 'Objeto', link: '/tutorials/programm/python/object/intro.html'},
            {text: 'Métodos', link: '/tutorials/programm/python/methods/intro.html'},
            {text: 'Jupyter Notebook', link: '/tutorials/programm/python/docs/intro.html'},
            {text: 'Socket.IO', link: '/tutorials/programm/python/socket/intro.html'},
          ],
        },
      ],
      // PHP * PHP * PHP * PHP * PHP * PHP * PHP
      '/tutorials/programm/php/intro.html': [
        {
          text: 'Requisitos',
          children: [ 
            {text: 'Instalando PHP', link: '/tutorials/programm/php/installing.html'},
          ],
        },
        {
          text: 'Desenvolver',
          children: [ 
            {text: 'Assíncrono/Síncrono', link: '/tutorials/programm/php/functions/intro.html'},
            {text: 'Autenticação', link: '/tutorials/programm/php/auth/intro.html'},
            {text: 'Criptografia', link: '/tutorials/programm/php/crypto/intro.html'},
            {text: 'Consumir API', link: '/tutorials/programm/php/protocols/http/intro.html'},
            {text: 'Criar Modulo', link: '/tutorials/programm/php/npm/intro.html'},
            {text: 'Data Types', link: '/tutorials/programm/php/structure/datatypes.html'},
            {text: 'Docker com PHP', link: '/tutorials/programm/php/docker.html'},
            {text: 'Eventos', link: '/tutorials/programm/php/events/intro.html'},
            {text: 'Files', link: '/tutorials/programm/php/file/intro.html'},
            {text: 'HTTP Client/Server', link: '/tutorials/programm/php/protocols/http/http.html'},
            {text: 'TCP Client/Server', link: '/tutorials/programm/php/protocols/tcp/tcp.html'},
            {text: 'UDP Client/Server', link: '/tutorials/programm/php/protocols/udp/udp.html'},
            {text: 'Telnet', link: '/tutorials/programm/php/protocols/telnet/telnet.html'},
            {text: 'Objeto', link: '/tutorials/programm/php/object/intro.html'},
            {text: 'Métodos', link: '/tutorials/programm/php/methods/intro.html'},
            {text: 'Socket.IO', link: '/tutorials/programm/php/socket/intro.html'},
          ],
        },
      ],
       // GO * GO * GO * GO * GO * GO * GO
       '/tutorials/programm/go/intro.html': [
        {
          text: 'Requisitos',
          children: [ 
            {text: 'Instalando GO lang', link: '/tutorials/programm/go/installing.html'},
          ],
        },
        {
          text: 'Desenvolver',
          children: [ 
            {text: 'Assíncrono/Síncrono', link: '/tutorials/programm/go/functions/intro.html'},
            {text: 'Autenticação', link: '/tutorials/programm/go/auth/intro.html'},
            {text: 'Criptografia', link: '/tutorials/programm/go/crypto/intro.html'},
            {text: 'Consumir API', link: '/tutorials/programm/go/protocols/http/intro.html'},
            {text: 'Channels', link: '/tutorials/programm/go/channels.html'},
            {text: 'Multiple Return Values', link: '/tutorials/programm/go/channels.html'},
            {text: 'Closures', link: '/tutorials/programm/go/channels.html'},
            {text: 'Data Types', link: '/tutorials/programm/go/datatypes.html'},
            {text: 'Defer', link: '/tutorials/programm/go/defer.html'},
            {text: 'Docker com GO', link: '/tutorials/programm/go/docker.html'},
            {text: 'Garoutines', link: '/tutorials/programm/go/garoutines.html'},
            {text: 'Stateful Garoutines', link: '/tutorials/programm/go/statefil-garoutines.html'},
            {text: 'Generics', link: '/tutorials/programm/go/generics.html'},
            {text: 'Switch', link: '/tutorials/programm/go/switch.html'},
            {text: 'Range', link: '/tutorials/programm/go/range.html'},
            {text: 'Functions', link: '/tutorials/programm/go/functions.html'},
            {text: 'Epoch', link: '/tutorials/programm/go/epoch.html'},
            {text: 'Error', link: '/tutorials/programm/go/error.html'},
            {text: 'Files', link: '/tutorials/programm/go/files.html'},
            {text: 'HTTP Client/Server', link: '/tutorials/programm/go/protocols/http/http.html'},
            {text: 'TCP Client/Server', link: '/tutorials/programm/go/protocols/tcp/tcp.html'},
            {text: 'UDP Client/Server', link: '/tutorials/programm/go/protocols/udp/udp.html'},
            {text: 'Telnet', link: '/tutorials/programm/go/protocols/telnet/telnet.html'},
            {text: 'Structs', link: '/tutorials/programm/go/structs.html'},
            {text: 'Methods', link: '/tutorials/programm/go/methods.html'},
            {text: 'Time', link: '/tutorials/programm/go/time.html'},
            {text: 'Recover', link: '/tutorials/programm/go/recover.html'},
            {text: 'Panic', link: '/tutorials/programm/go/panic.html'},
            {text: 'URL Parsing', link: '/tutorials/programm/go/url-parsing.html'},
            {text: 'Writing Files', link: '/tutorials/programm/go/write-files.html'},
            {text: 'Reading Files', link: '/tutorials/programm/go/read-files.html'},
            {text: 'Line Filters', link: '/tutorials/programm/go/line-filters.html'},
            {text: 'JSON', link: '/tutorials/programm/go/json.html'},
            {text: 'XML', link: '/tutorials/programm/go/xml.html'},
            {text: 'Directories', link: '/tutorials/programm/go/directories.html'},
            {text: 'Temporary Files', link: '/tutorials/programm/go/temporary-files.html'},
            {text: 'Linha de Comando', link: '/tutorials/programm/go/line-command.html'},
            {text: 'Sockets', link: '/tutorials/programm/go/sockets.html'},
            {text: 'Spawning Processes', link: '/tutorials/programm/go/spawning-processes.html'},
            {text: 'Signals', link: '/tutorials/programm/go/signals.html'},
            {text: 'Exit', link: '/tutorials/programm/go/exit.html'},
          ],
        },
      ],
    },
    nav: [
      { text: "Home", link: "/" }
    ],
    repoLabel: "Open Source",
    displayAllHeaders: true
  },
}
