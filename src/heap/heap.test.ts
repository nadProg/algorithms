import { compareNumbersAscending, compareNumbersDescending } from '@/compare';
import { Heap } from './heap';

describe('Heap', () => {
  describe('Default (Max) heap', () => {
    describe('Empty heap', () => {
      const nodes: unknown[] = [];

      test('getSize should return 0', () => {
        const heap = new Heap(nodes);
        const size = heap.getSize();
        expect(size).toBe(0);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be null', () => {
          expect(extractedRoot).toBe(null);
        });

        test('getSize after extraction should be 0', () => {
          const size = heap.getSize();
          expect(size).toBe(0);
        });
      });

      describe('addNode', () => {
        describe('add -1', () => {
          const heap = new Heap(nodes);
          heap.addNode(-1);

          test('getSize after adding should return 1', () => {
            const size = heap.getSize();
            expect(size).toBe(1);
          });

          test('extractedRoot should be -1', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(-1);
          });
        });

        describe('add 3', () => {
          const heap = new Heap(nodes);
          heap.addNode(3);

          test('getSize after adding should return 1', () => {
            const size = heap.getSize();
            expect(size).toBe(1);
          });

          test('extractedRoot should be 3', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(3);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4 5 6', () => {
      const nodes = [0, 1, 2, 3, 4, 5, 6];

      test('getSize should return 7', () => {
        const heap = new Heap(nodes);
        const size = heap.getSize();
        expect(size).toBe(7);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 6', () => {
          expect(extractedRoot).toBe(6);
        });

        test('getSize after extraction should return 6', () => {
          const size = heap.getSize();
          expect(size).toBe(6);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes);
          heap.addNode(-1);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 6', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(6);
          });
        });

        describe('add average value 3', () => {
          const heap = new Heap(nodes);
          heap.addNode(3);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 6', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(6);
          });
        });

        describe('add max value 7', () => {
          const heap = new Heap(nodes);
          heap.addNode(7);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 7', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(7);
          });
        });
      });
    });
  });

  describe('Max heap', () => {
    describe('Empty heap', () => {
      const nodes: number[] = [];

      test('getSize should return 0', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const size = heap.getSize();
        expect(size).toBe(0);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be null', () => {
          expect(extractedRoot).toBe(null);
        });

        test('getSize after extraction should be 0', () => {
          const size = heap.getSize();
          expect(size).toBe(0);
        });
      });

      describe('addNode', () => {
        describe('add -1', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(-1);

          test('getSize after adding should return 1', () => {
            const size = heap.getSize();
            expect(size).toBe(1);
          });

          test('extractedRoot should be -1', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(-1);
          });
        });

        describe('add 3', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(3);

          test('getSize after adding should return 1', () => {
            const size = heap.getSize();
            expect(size).toBe(1);
          });

          test('extractedRoot should be 3', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(3);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4 5 6', () => {
      const nodes = [0, 1, 2, 3, 4, 5, 6];

      test('getSize should return 7', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const size = heap.getSize();
        expect(size).toBe(7);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 6', () => {
          expect(extractedRoot).toBe(6);
        });

        test('getSize after extraction should return 6', () => {
          const size = heap.getSize();
          expect(size).toBe(6);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(-1);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 6', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(6);
          });
        });

        describe('add average value 3', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(3);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 6', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(6);
          });
        });

        describe('add max value 7', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(7);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 7', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(7);
          });
        });
      });
    });
  });

  describe('Min heap', () => {
    describe('Empty heap', () => {
      const nodes: number[] = [];

      test('getSize should return 0', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const size = heap.getSize();
        expect(size).toBe(0);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be null', () => {
          expect(extractedRoot).toBe(null);
        });

        test('getSize after extraction should be 0', () => {
          const size = heap.getSize();
          expect(size).toBe(0);
        });
      });

      describe('addNode', () => {
        describe('add -1', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(-1);

          test('getSize after adding should return 1', () => {
            const size = heap.getSize();
            expect(size).toBe(1);
          });

          test('extractedRoot should be -1', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(-1);
          });
        });

        describe('add 3', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(3);

          test('getSize after adding should return 1', () => {
            const size = heap.getSize();
            expect(size).toBe(1);
          });

          test('extractedRoot should be 3', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(3);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4 5 6', () => {
      const nodes = [0, 1, 2, 3, 4, 5, 6];

      test('getSize should return 7', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const size = heap.getSize();
        expect(size).toBe(7);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 0', () => {
          expect(extractedRoot).toBe(0);
        });

        test('getSize after extraction should return 6', () => {
          const size = heap.getSize();
          expect(size).toBe(6);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(-1);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be -1', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(-1);
          });
        });

        describe('add average value 3', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(3);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 0', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(0);
          });
        });

        describe('add max value 7', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(7);

          test('getSize after adding should return 8', () => {
            const size = heap.getSize();
            expect(size).toBe(8);
          });

          test('extractedRoot should be 0', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(0);
          });
        });
      });
    });
  });
});
