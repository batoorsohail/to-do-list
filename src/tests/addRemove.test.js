/**
 * @jest-environment jsdom
 */

import addTask from './add&rmoveTask.js';
import LocalStorage from '../localstorage.js';
import UI from '../UI.js';

describe('add and remove task tests', () => {
  test('should addTask', () => {
    addTask('Cook');
    const taskList = LocalStorage.getData();
    expect(taskList).toHaveLength(1);
  });

  // test('should removeTask', () => {
  //   addTask('Cook');
  //   const taskList = LocalStorage.getData();
  //   expect(taskList).toHaveLength(2);
  // });

  test('should removeTask', () => {
    const target = { parentElement: { removeChild: jest.fn() } };
    const btn = {};
    const index = 0;
    const taskList = LocalStorage.getData();

    const UIWrapper = {
      showAllTasks: UI.showAllTasks,
      updateIndex: UI.updateIndex,
    };
    const mockedShowAllTasks = jest.spyOn(UIWrapper, 'showAllTasks');
    mockedShowAllTasks.mockImplementation(() => {});

    const mockedUpdateIndex = jest.spyOn(UIWrapper, 'updateIndex');
    mockedUpdateIndex.mockImplementation(() => taskList.slice(1));

    // const todoList = new UI();
    UI.removeTask(target, btn, index);
    expect(target.parentElement.removeChild).toHaveBeenCalledWith(target.parentElement);


  });

  class UIMock {
    static removeTask = jest.fn();
  }
  
  test('should removeTask 2', () => {
      const target = { parentElement: { removeChild: jest.fn() } };
      const btn = {};
      const index = 0;
      const taskList = LocalStorage.getData();
  
      const UIWrapper = {
        showAllTasks: UI.showAllTasks,
        updateIndex: UI.updateIndex,
      };
      const mockedShowAllTasks = jest.spyOn(UIWrapper, 'showAllTasks');
      mockedShowAllTasks.mockImplementation(() => {});
  
      const mockedUpdateIndex = jest.spyOn(UIWrapper, 'updateIndex');
      mockedUpdateIndex.mockImplementation(() => taskList.slice(1));
  
      const List = new UIMock();
      UI.removeTask(target, btn, index);
      expect(target.parentElement.removeChild).toHaveBeenCalledWith(target.parentElement);
  });
  





  
  
});