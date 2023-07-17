/**
 * A typewriter that dynamically emulates the input of a user
 * @param {Int32Array} iterationSpeed The speed at which the text is typed
 * @param {Element} destinationElement The HTML element in which the inner text will be inserted
 * @param {String} inputText The text to type
 * @param {Bool} cursorToRemove Remove cursor at the end
 * @param {function} callback (Optional) The function to execute once the typing is done
 */
const Typewriter = (iterationSpeed, destinationElement, inputText, cursorToRemove, callback) => {
    const iterateTypewriter = (inputText, iTextPos) => {
      const iArrLength = inputText.length;
      iTextPos++;
      destinationElement.innerText = inputText.substring(0, iTextPos);
      if (iTextPos === iArrLength) {
        if (cursorToRemove) {
          setTimeout(removeCursor, 1000);
          callback && callback();
        } else {
          callback && callback();
        }
      } else {
        setTimeout(() => iterateTypewriter(inputText, iTextPos), iterationSpeed);
      }
    };
  
    const removeCursor = () => {
      destinationElement.classList.remove("typewriter");
    };
  
    setTimeout(() => iterateTypewriter(inputText, 0), 1000);
  };