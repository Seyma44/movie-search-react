# Responsive React Movie App with Sass and OMDB API

React Film Arama Uygulaması'na hoş geldiniz! Bu uygulama, OMDB API'sini kullanarak filmleri aramanıza ve filtre kullanarak ilgili bilgileri görüntülemenize olanak tanır. Uygulamada Styling için Sass kullanılmıştır.


## İçindekiler

- [Başlarken](#başlarken)

- [Önkoşullar](#önkoşullar)

- [Kurulum](#kurulum)

- [API Key](#api-anahtarı)

- [Kullanım](#kullanım)


## Başlarken

### Önkoşullar

Başlamadan önce, aşağıdaki araçların yüklü olduğundan emin olun:

- [Node.js](https://nodejs.org/) (Tavsiye edilen LTS sürümü)

- [Yarn](https://yarnpkg.com/) (Paket yönetimi için Yarn kullanılmaktadır)

 
### Kurulum

1. Dosyayı indirdiğiniz klasöre gidin:
```bash
cd search-movie 
```
1. Dosyayı indirdiğiniz klasöre gidin:

```bash
cd search-movie
```
 
2. node_modules hala yüklü eğer yüklü değilse yükleyin:
```bash
yarn install
```
  
### API Key

OMDB API'sini kullanmak için bir API anahtarına ihtiyacınız olacak. Bir anahtar almak için şu adımları izleyin:

 
1. OMDB API web sitesini ziyaret edin. [OMDB API web sitesi](https://www.omdbapi.com/apikey.aspx)
2. Bir hesap oluşturun ve API anahtarınızı alın.
3. Projenin root dizinindeki .env dosyasına kendi bilgilerinizi yazın.
```bash
REACT_APP_API_URL=url_buraya_ekle
REACT_APP_API_KEY=api_key_buraya_ekle
```
  
## Kullanımı

1. Sunucuyu başlatmak için:
```bash
yarn start
```
2. http://localhost:3000/ açıldığında default olarak arama çubuğunda Pokemon aratılmış olarak gelecektir. Her bir sayfada 10 adet film listelenmektedir. Listenin devamı için paginationı kullanınız. Filtrelemek için tablonun üzerindeki arama kutularını kullanabilirsiniz. Detay sayfasına gitmek için ilgili filmin posterine tıklamanız yeterlidir. Geri döndüğünüzde son arattığınız film sayfası yeniden karşınıza çıkacaktır.