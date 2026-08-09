import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('subscription form prevents native URL submission', async () => {
  let submitHandler;

  globalThis.document = {
    querySelector: selector => {
      assert.equal(selector, '.footer__form');
      return {
        addEventListener: (eventName, handler) => {
          assert.equal(eventName, 'submit');
          submitHandler = handler;
        },
      };
    },
  };

  await import('../assets/js/subscribe-form.js');

  let prevented = false;
  submitHandler({
    preventDefault: () => {
      prevented = true;
    },
  });

  assert.equal(prevented, true);
  delete globalThis.document;
});

test('deployment actions are pinned and permissions are explicit', async () => {
  const workflow = await readFile('.github/workflows/deploy.yml', 'utf8');
  const actionReferences = [...workflow.matchAll(/^\s*-?\s*uses:\s*[^@\s]+@([^\s#]+)/gm)];

  assert.equal(actionReferences.length, 3);
  for (const [, reference] of actionReferences) {
    assert.match(reference, /^[0-9a-f]{40}$/);
  }

  assert.match(workflow, /^permissions:\n  contents: write$/m);
  assert.match(workflow, /^\s+persist-credentials: false$/m);
});
