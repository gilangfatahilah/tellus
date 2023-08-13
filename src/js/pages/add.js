const Add = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const addStoryForm = document.querySelector('#addForm');
    const imageInput = document.querySelector('#validationImage');
    addStoryForm.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        e.stopPropagation();

        addStoryForm.classList.add('was-validated');
        this._addStory();
      },
      false,
    );

    imageInput.addEventListener('change', (e) => {
      this._updateImagePreview();
    });
  },

  _addStory() {
    const storyData = this._getStoryData();
    if (this._validateStoryData({ ...storyData })) {
      console.log(storyData);
    }
  },

  _getStoryData() {
    const nameInput = document.querySelector('#validationName');
    const storyInput = document.querySelector('#validationStory');
    const imageInput = document.querySelector('#validationImage');
    return {
      author: nameInput.value,
      story: storyInput.value,
      picture: imageInput.files[0],
      date: new Date().toLocaleDateString(),
    };
  },

  _validateStoryData(storyData) {
    const storyDataFiltered = Object.values(storyData).filter((item) => item === '');

    return storyDataFiltered.length === 0;
  },

  _updateImagePreview() {
    const imageChange = document.querySelector('#validationImageChange');
    const imageInput = document.querySelector('#validationImage');
    const templatePreview = document.querySelector('#templatePreview');

    const image = imageInput.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      imageChange.classList.remove('d-none');
      imageChange.style.backgroundImage = `url('${e.target.result}')`;
      templatePreview.classList.add('d-none');
    };

    reader.readAsDataURL(image);
  },
};

export default Add;
