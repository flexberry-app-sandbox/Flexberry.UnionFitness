import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISUnionFitnessActionModel from './models/i-i-s-union-fitness-action';
import IISUnionFitnessCardTypeModel from './models/i-i-s-union-fitness-card-type';
import IISUnionFitnessClubCardModel from './models/i-i-s-union-fitness-club-card';
import IISUnionFitnessDirectionModel from './models/i-i-s-union-fitness-direction';
import IISUnionFitnessGroupPragramModel from './models/i-i-s-union-fitness-group-pragram';
import IISUnionFitnessGroupProgramModel from './models/i-i-s-union-fitness-group-program';
import IISUnionFitnessHallModel from './models/i-i-s-union-fitness-hall';
import IISUnionFitnessScheduleModel from './models/i-i-s-union-fitness-schedule';
import IISUnionFitnessUserTypeModel from './models/i-i-s-union-fitness-user-type';
import IISUnionFitnessUserModel from './models/i-i-s-union-fitness-user';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-union-fitness-action': IISUnionFitnessActionModel,
    'i-i-s-union-fitness-card-type': IISUnionFitnessCardTypeModel,
    'i-i-s-union-fitness-club-card': IISUnionFitnessClubCardModel,
    'i-i-s-union-fitness-direction': IISUnionFitnessDirectionModel,
    'i-i-s-union-fitness-group-pragram': IISUnionFitnessGroupPragramModel,
    'i-i-s-union-fitness-group-program': IISUnionFitnessGroupProgramModel,
    'i-i-s-union-fitness-hall': IISUnionFitnessHallModel,
    'i-i-s-union-fitness-schedule': IISUnionFitnessScheduleModel,
    'i-i-s-union-fitness-user-type': IISUnionFitnessUserTypeModel,
    'i-i-s-union-fitness-user': IISUnionFitnessUserModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
