
const orderBtn = document.getElementById('instagramOrderBtn');
const note = document.getElementById('formNote');

orderBtn?.addEventListener('click', async () => {
  const occasion = document.getElementById('occasion').value;
  const style = document.getElementById('style').value || 'Not specified';
  const budget = document.getElementById('budget').value;
  const notes = document.getElementById('notes').value || 'None';

  const message = `Hi Alos Floral Arrangements! I would like to place an order.

Occasion: ${occasion}
Preferred colors / flowers: ${style}
Budget: ${budget}
Pickup or delivery notes: ${notes}`;

  try {
    await navigator.clipboard.writeText(message);
    note.textContent = 'Order details copied! Paste them into your Instagram DM.';
  } catch (error) {
    note.textContent = 'Could not copy automatically, but Instagram will still open.';
  }

  window.open('https://www.instagram.com/alosarrangements/', '_blank', 'noopener,noreferrer');
});
