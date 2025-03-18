export function getNavigationButton(options = { }) {
  let navigationHtml = '';
  if (options.prevUrl || options.nextUrl) {
    navigationHtml = `
          <div class="flex justify-between p-4">
            ${options.prevUrl
    ? `<a href="${options.prevUrl}" class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700">
                  Previous
                </a>`
    : '<div></div>'}
            ${options.nextUrl
    ? `<a href="${options.nextUrl}" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                  Next
                </a>`
    : ''}
          </div>
        `;
  }
  return navigationHtml;
}
