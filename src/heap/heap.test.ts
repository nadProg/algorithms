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

      test('getRootNode should return null', () => {
        const heap = new Heap(nodes);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(null);
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

        test('getRootNode after extraction should be null', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(null);
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

          test('getRootNode after adding should return -1', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(-1);
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

          test('getRootNode after adding should return 3', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(3);
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

      test('getRootNode should return 6', () => {
        const heap = new Heap(nodes);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(6);
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

        test('getRootNode after extraction should return 5', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(5);
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

          test('getRootNode after adding should return 6', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(6);
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

          test('getRootNode after adding should return 6', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(6);
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

          test('getRootNode after adding should return 7', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(7);
          });

          test('extractedRoot should be 7', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(7);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4 5', () => {
      const nodes = [0, 1, 2, 3, 4, 5];

      test('getSize should return 6', () => {
        const heap = new Heap(nodes);
        const size = heap.getSize();
        expect(size).toBe(6);
      });

      test('getRootNode should return 5', () => {
        const heap = new Heap(nodes);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(5);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 5', () => {
          expect(extractedRoot).toBe(5);
        });

        test('getSize after extraction should return 5', () => {
          const size = heap.getSize();
          expect(size).toBe(5);
        });

        test('getRootNode after extraction should return 4', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(4);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes);
          heap.addNode(-1);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getRootNode after adding should return 5', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(5);
          });

          test('extractedRoot should be 5', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(5);
          });
        });

        describe('add average value 3', () => {
          const heap = new Heap(nodes);
          heap.addNode(3);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getRootNode after adding should return 5', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(5);
          });

          test('extractedRoot should be 5', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(5);
          });
        });

        describe('add max value 7', () => {
          const heap = new Heap(nodes);
          heap.addNode(7);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getRootNode after adding should return 7', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(7);
          });

          test('extractedRoot should be 7', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(7);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4', () => {
      const nodes = [0, 1, 2, 3, 4];

      test('getSize should return 5', () => {
        const heap = new Heap(nodes);
        const size = heap.getSize();
        expect(size).toBe(5);
      });

      test('getRootNode should return 4', () => {
        const heap = new Heap(nodes);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(4);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 4', () => {
          expect(extractedRoot).toBe(4);
        });

        test('getSize after extraction should return 4', () => {
          const size = heap.getSize();
          expect(size).toBe(4);
        });

        test('getRootNode after extraction should return 3', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(3);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes);
          heap.addNode(-1);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 4', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(4);
          });

          test('extractedRoot should be 4', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(4);
          });
        });

        describe('add average value 2', () => {
          const heap = new Heap(nodes);
          heap.addNode(2);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 4', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(4);
          });

          test('extractedRoot should be 4', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(4);
          });
        });

        describe('add max value 5', () => {
          const heap = new Heap(nodes);
          heap.addNode(5);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 5', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(5);
          });

          test('extractedRoot should be 5', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(5);
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

      test('getRootNode should return null', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(null);
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

        test('getRootNode after extraction should be null', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(null);
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

          test('getRootNode after adding should be -1', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(-1);
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

          test('getRootNode after adding should be 3', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(3);
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

      test('getRootNode should return 6', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(6);
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

        test('getRootNode after extraction should return 5', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(5);
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

          test('getRootNode after adding should return 6', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(6);
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

          test('getRootNode after adding should return 6', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(6);
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

          test('getRootNode after adding should return 7', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(7);
          });

          test('extractedRoot should be 7', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(7);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4 5', () => {
      const nodes = [0, 1, 2, 3, 4, 5];

      test('getSize should return 6', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const size = heap.getSize();
        expect(size).toBe(6);
      });

      test('getRootNode should return 5', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(5);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 5', () => {
          expect(extractedRoot).toBe(5);
        });

        test('getSize after extraction should return 5', () => {
          const size = heap.getSize();
          expect(size).toBe(5);
        });

        test('getRootNode after extraction should return 4', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(4);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(-1);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getRootNode after adding should return 5', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(5);
          });

          test('extractedRoot should be 5', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(5);
          });
        });

        describe('add average value 3', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(3);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getRootNode after adding should return 5', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(5);
          });

          test('extractedRoot should be 5', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(5);
          });
        });

        describe('add max value 7', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(7);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getRootNode after adding should return 7', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(7);
          });

          test('extractedRoot should be 7', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(7);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4', () => {
      const nodes = [0, 1, 2, 3, 4];

      test('getSize should return 5', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const size = heap.getSize();
        expect(size).toBe(5);
      });

      test('getRootNode should return 4', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(4);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersAscending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 4', () => {
          expect(extractedRoot).toBe(4);
        });

        test('getSize after extraction should return 4', () => {
          const size = heap.getSize();
          expect(size).toBe(4);
        });

        test('getRootNode after extraction should return 3', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(3);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(-1);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 4', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(4);
          });

          test('extractedRoot should be 4', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(4);
          });
        });

        describe('add average value 2', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(2);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 4', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(4);
          });

          test('extractedRoot should be 4', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(4);
          });
        });

        describe('add max value 5', () => {
          const heap = new Heap(nodes, compareNumbersAscending);
          heap.addNode(5);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 5', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(5);
          });

          test('extractedRoot should be 5', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(5);
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

      test('getRootNode should return null', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(null);
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

        test('getRootNode after extraction should be null', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(null);
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

          test('getRootNode after extraction should be -1', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(-1);
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

          test('getRootNode after extraction should be 3', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(3);
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

      test('getRootNode should return 0', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(0);
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

        test('getRootNode after extraction should return 1', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(1);
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

          test('getSize after adding should return -1', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(-1);
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

          test('getSize after adding should return 0', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(0);
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

          test('getSize after adding should return 0', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(0);
          });

          test('extractedRoot should be 0', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(0);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4 5', () => {
      const nodes = [0, 1, 2, 3, 4, 5];

      test('getSize should return 6', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const size = heap.getSize();
        expect(size).toBe(6);
      });

      test('getRootNode should return 0', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(0);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 0', () => {
          expect(extractedRoot).toBe(0);
        });

        test('getSize after extraction should return 5', () => {
          const size = heap.getSize();
          expect(size).toBe(5);
        });

        test('getRootNode after extraction should return 1', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(1);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(-1);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getRootNode after adding should return -1', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(-1);
          });

          test('extractedRoot should be -1', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(-1);
          });
        });

        describe('add average value 3', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(3);

          test('getSize after adding should return 7', () => {
            const size = heap.getSize();
            expect(size).toBe(7);
          });

          test('getSize after adding should return 0', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(0);
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
            expect(size).toBe(7);
          });

          test('getSize after adding should return 0', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(0);
          });

          test('extractedRoot should be 0', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(0);
          });
        });
      });
    });

    describe('Nodes 0 1 2 3 4', () => {
      const nodes = [0, 1, 2, 3, 4];

      test('getSize should return 5', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const size = heap.getSize();
        expect(size).toBe(5);
      });

      test('getRootNode should return 0', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const rootNode = heap.getRootNode();
        expect(rootNode).toBe(0);
      });

      describe('extractRootNode', () => {
        const heap = new Heap(nodes, compareNumbersDescending);
        const extractedRoot = heap.extractRootNode();

        test('extractedRoot should be 0', () => {
          expect(extractedRoot).toBe(0);
        });

        test('getSize after extraction should return 4', () => {
          const size = heap.getSize();
          expect(size).toBe(4);
        });

        test('getRootNode after extraction should return 1', () => {
          const rootNode = heap.getRootNode();
          expect(rootNode).toBe(1);
        });
      });

      describe('addNode', () => {
        describe('add min value -1', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(-1);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return -1', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(-1);
          });

          test('extractedRoot should be -1', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(-1);
          });
        });

        describe('add average value 2', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(2);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 0', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(0);
          });

          test('extractedRoot should be 0', () => {
            const extractedRoot = heap.extractRootNode();
            expect(extractedRoot).toBe(0);
          });
        });

        describe('add max value 5', () => {
          const heap = new Heap(nodes, compareNumbersDescending);
          heap.addNode(5);

          test('getSize after adding should return 6', () => {
            const size = heap.getSize();
            expect(size).toBe(6);
          });

          test('getRootNode after adding should return 0', () => {
            const rootNode = heap.getRootNode();
            expect(rootNode).toBe(0);
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
