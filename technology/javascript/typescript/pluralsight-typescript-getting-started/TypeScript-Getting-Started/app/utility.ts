function getInputValue(elementId: string): string {
  const inputElement: HTMLInputElement = (document.getElementById(elementId) as HTMLInputElement);

  return inputElement.value;
}

const logger = console.log;

export { getInputValue as getValue, logger };
