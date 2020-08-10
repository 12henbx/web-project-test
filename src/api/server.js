import { Server, Model } from 'miragejs'

export function makeServer ({ environment = 'development' } = {}) {
  const server = new Server({
    environment,

    models: {
      article: Model
    },

    seeds (server) {
      server.create('article', {
        id: 'A001',
        title: 'Judul Aku',
        content: 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.',
        date: '05-10-2018'
      })
      server.create('article', {
        id: 'A002',
        title: 'Judul Anda',
        content: 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.',
        date: '07-10-2018'
      })
      server.create('article', {
        id: 'A003',
        title: 'Judul Kamu',
        content: 'Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen grafis atau presentasi visual seperti font, tipografi, dan tata letak.',
        date: '09-10-2018'
      })
    },

    routes () {
      this.namespace = 'api'
      this.get('/articles', schema => {
        return schema.articles.all()
      })
    }
  })

  return server
}
