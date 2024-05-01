import en from '~/assets/locales/en.json';
import ru from '~/assets/locales/ru.json';

export default defineI18nConfig(() => ({
  legacy: false,
  messages: { en, ru },
}));
